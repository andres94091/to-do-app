/**
 * Function Scan on get_task_and_users  (cost=0.25..10.25 rows=1000 width=69)
 * @param {*} knex
 */
exports.up = function (knex) {
  return knex.raw(`
	create or replace function get_task_and_users(user_filter integer, statusFilter boolean, bandFilter boolean)
	returns table (
		id integer,
		task varchar,
		status boolean,
		name varchar
	)
	LANGUAGE plpgsql
as $$
begin
	if bandFilter = true
	then
	return query
		select t.id, t.task, t.status, u.name from tasks as t
		left join users as u on u.id = t.user_id
		where t.user_id = user_filter
		and t.status = statusFilter
		order by t.status, t.id;
	
	else
	return query
		select t.id, t.task, t.status, u.name from tasks as t
		left join users as u on u.id = t.user_id
		where t.user_id = user_filter
		order by t.status, t.id;
	end if;
end; $$
  `);
};

exports.down = function (knex) {
  return knex.raw(
    `DROP FUNCTION get_task_and_users(integer, boolean, boolean);`,
  );
};
