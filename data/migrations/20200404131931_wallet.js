
exports.up = async knex => {
  return knex.schema.createTable('wallet', table => {
      table.increments('id')
      table.string('chain', 10).notNullable()
      table.string('address', 45).notNullable()
      table.integer('accountId').notNullable()
      table.timestamps()

      table.foreign('accountId').references('account.id')
      table.unique(['accountId', 'chain', 'address'])
  })
};

exports.down = knex => {
  knex.schema.dropTableIfExists('wallet')
};
