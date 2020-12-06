exports.up = function (knex) {
  return knex.raw(`
  create or replace function get_task_and_users(user_filter integer)
	returns table (
		tasks varchar,
		status boolean,
		name varchar
	)
	LANGUAGE plpgsql
as $$
begin
	return query
		select t.task, t.status, u.name from tasks as t
		left join users as u on u.id = t.user_id
		where t.user_id = user_filter
		order by u.name, t.status;
end; $$
  `);
};

exports.down = function (knex) {
  return knex.raw(`DROP FUNCTION get_task_and_users(integer);`);
};
