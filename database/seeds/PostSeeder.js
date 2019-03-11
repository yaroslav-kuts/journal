const Factory = use('Factory');

class PostSeeder {
  async run() {
    const { id: user_id } = await Factory.model('App/Models/User').create();
    await Factory.model('App/Models/Post').create({ user_id });
  }
}

module.exports = PostSeeder;