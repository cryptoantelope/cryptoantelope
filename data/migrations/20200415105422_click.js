const db = require('../db')

exports.up = async (knex) => {
  return knex.schema.createTable('click', table => {
      table.integer('linkId')
      table.timestamp('created_at').defaultTo(db.fn.now())

      table.foreign('linkId').references('link.id')
  })
};

exports.down = (knex) => {
  knex.schema.dropTableIfExists('click')
};
