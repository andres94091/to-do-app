exports.up = function (knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('id');
    table.string('task').notNullable();
    table.boolean('status').notNullable().defaultTo(false);
    table
      .integer('user_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tasks');
};
