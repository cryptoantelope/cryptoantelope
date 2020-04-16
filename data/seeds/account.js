
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('account').del()
    .then(function () {
      // Inserts seed entries
      return knex('account').insert([
        {id: 1, name: 'cryptoantelope', type: 'personal', description: 'Account to share crypto tips'}
      ]);
    });
};
