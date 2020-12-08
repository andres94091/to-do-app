/**
 * Function Scan on get_count_task_per_user  (cost=0.25..10.25 rows=1000 width=40)
 * @param {*} knex
 */
exports.up = function (knex) {
  return knex.raw(`
	create or replace function get_count_task_per_user()
	returns table(
		id integer,
		name varchar,
		amountTask integer
	)
	language plpgsql
as $$
begin
	return query
		select u.id, u.name, count(t.*)::integer from users u
		left join tasks t on u.id = t.user_id
		group by u.id
		order by u.id;
end; $$
  `);
};

exports.down = function (knex) {
  return knex.raw(`DROP FUNCTION get_count_task_per_user();`);
};
