const Post = use('App/Models/Post');

class PostController {
  async get({ request }) {
    const { $post } = request;
    return {
      message: 'ok',
      data: $post,
    };
  }

  async list() {
    const posts = await Post.all();
    return {
      message: 'ok',
      data: posts,
    };
  }

  async store({ request }) {
    const body = request.post();
    const post = await Post.create(body);
    return {
      message: 'Post was created',
      data: post,
    };
  }

  async update({ request }) {
    const { $post } = request;
    const { text } = request.post();
    $post.text = text;
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
