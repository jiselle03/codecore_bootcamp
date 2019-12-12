const faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('posts')
  .del()
  .then(function() {
    // Generate an array of 1000 posts using faker
    const posts = Array.from({ length: 1000}).map(() => {
      return {
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        imageUrl: faker.image.imageUrl(),
        viewCount: faker.random.number(),
        createdAt: faker.date.past()
      };
    });
    
    return knex('posts').insert(posts);
  });
};