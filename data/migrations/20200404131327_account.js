
exports.up = async knex => {
  return knex.schema.createTable('account', table => {
      table.increments('id')
      table.string('name', 20).notNullable()
      table.string('type', 100)
      table.text('description')
      table.timestamps(true, true)

      table.unique('name')
  })
};

exports.down = knex => {
  knex.schema.dropTableIfExists('account')
};
