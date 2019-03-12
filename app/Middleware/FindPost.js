const Post = use('App/Models/Post');

class FindPost {
  async handle(
    { request, response, params: { id } },
    next,
  ) {
    const post = await Post.find(id);

    if (!post) {
      return response.status(404).json({
        message: 'Post not found',
        data: { id },
      });
    }

    request.$post = post;

    return next();
  }
}

module.exports = FindPost;
