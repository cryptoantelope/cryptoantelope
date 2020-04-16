
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {type: 'web', url: 'https://cryptoantelope.herokuapp.com', redirect: 'https://cryptoantelope.herokuapp.com', accountId: 1},
        {type: 'twitter', url: 'https://twitter.com/cryptoAntelope', redirect: 'https://twitter.com/cryptoAntelope', accountId: 4},
      ]);
    });
};
