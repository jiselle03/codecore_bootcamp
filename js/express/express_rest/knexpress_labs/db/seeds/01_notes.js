
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {content: 'first note'},
        {content: 'second note'},
        {content: 'third note'},
        {content: 'fourth note'},
        {content: 'fifth note'},
        {content: 'sixth note'},
      ]);
    });
};
