
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('wallet').del()
    .then(function () {
      // Inserts seed entries
      return knex('wallet').insert([
        {id: 1, accountId: 1, chain: 'btc', address: '1Kz3qnYyejUUQYM6z6WqJdSLRnuFFn4sQ6'},
        {id: 2, accountId: 1, chain: 'doge', address: 'DSXYTGtzi31b2MeLn8y5RgcD4fiN5x9xsM'},
        {id: 3, accountId: 1, chain: 'eth', address: '0xB47adEe31A396B38876DdDdb30976c510283d94a'},
      ]);
    });
};
