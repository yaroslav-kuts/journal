const Factory = use('Factory');

Factory.blueprint('App/Models/User', async (faker, index, data) => ({
  firstname: data.firstname || faker.first(),
  lastname: data.lastname || faker.last(),
  email: data.email || faker.email(),
  password: data.password || faker.password(),
  code: data.code || faker.hash({ length: 15 }),
  verified: data.verified || true,
}));

Factory.blueprint('App/Models/Post', (faker, index, data) => ({
  text: data.text || faker.paragraph({ sentences: 3 }),
  user_id: data.user_id || faker.integer({ min: 1, max: 1000 }),
}));
