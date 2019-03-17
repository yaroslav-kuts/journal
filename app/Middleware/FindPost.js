const Post = use('App/Models/Post');

class FindPost {
  async handle(
    { request, response, params: { postId, userId } },
    next,
  ) {
    const post = await Post.find(postId);

    if (!post) {
      return response.status(404).json({
        message: 'Post not found',
        data: { postId },
      });
    }

    if (post.user_id !== Number(userId)) {
      return response.status(403).json({
        message: 'User doesn\'t have access to this resource',
        data: { postId },
      });
    }

    request.$post = post;

    return next();
  }
}

module.exports = FindPost;
