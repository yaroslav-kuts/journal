const User = use('App/Models/User');

class FindUser {
  async handle(
    { request, response, params: { userId } },
    next,
  ) {
    const user = await User.find(userId);

    if (!user) {
      return response.status(404).json({
        message: 'User not found',
        data: { userId },
      });
    }

    if (user.id !== Number(userId)) {
      return response.status(403).json({
        message: 'User doesn\'t have access to this resource',
        data: { postId },
      });
    }

    request.$user = user;

    return next();
  }
}

module.exports = FindUser;
