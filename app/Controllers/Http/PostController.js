const Post = use('App/Models/Post');

class PostController {
  async get({ request }) {
    const { $post } = request;
    return {
      message: 'ok',
      data: $post,
    };
  }

  async list({ params: { userId } }) {
    const posts = await Post.query()
      .where({ user_id: userId })
      .fetch();
    return {
      message: 'ok',
      data: posts,
    };
  }

  async store({ request, params: { userId } }) {
    const { text } = request.post();
    const post = await Post.create({
      text,
      user_id: userId,
    });
    return {
      message: 'Post was created',
      data: post,
    };
  }

  async update({ request }) {
    const { $post } = request;
    const { text } = request.post();
    $post.text = text;
    await $post.save();
    return {
      message: 'Post was updated',
      data: $post,
    };
  }

  async delete({ request }) {
    const { $post } = request;
    await $post.delete();
    return {
      message: 'Post was deleted',
      data: { id: $post.id },
    };
  }
}

module.exports = PostController;
