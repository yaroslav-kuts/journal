const User = use('App/Models/User');

class FindUser {
  async handle(
    { request, response, params: { id } },
    next,
  ) {
    const user = await User.find(id);

    if (!user) {
      return response.status(404).json({
        message: 'User not found',
        data: { id },
      });
    }

    request.user = user;

    return next();
  }
}

module.exports = FindUser;
