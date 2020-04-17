
exports.up = async knex => {
    return knex.schema.createTable('link', table => {
        table.increments('id')
        table.string('type', 20).notNullable()
        table.string('url', 100).notNullable()
        table.string('redirect', 100).notNullable()
        table.integer('accountId').notNullable()
        table.timestamps(true, true)

        table.foreign('accountId').references('account.id')
    })
};

exports.down = async knex => {
    knex.schema.dropTableIfExists('link')
};
