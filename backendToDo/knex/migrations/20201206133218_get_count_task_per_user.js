exports.up = function (knex) {
  return knex.raw(`
  create or replace function get_count_task_per_user()
	returns table(
		name varchar,
		task_per_user integer
	)
	language plpgsql
as $$
begin
	return query
		select u.name, count(t.*)::integer from users u
		left join tasks t on u.id = t.user_id
		group by u.id
		order by u.id;
end; $$
  `);
};

exports.down = function (knex) {
  return knex.raw(`DROP FUNCTION get_count_task_per_user();`);
};
