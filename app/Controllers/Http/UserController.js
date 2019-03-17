const User = use('App/Models/User');

class UserController {
  async get({ request }) {
    const { $user } = request;
    return {
      message: 'ok',
      data: $user,
    };
  }

  async store({ request }) {
    const body = request.post();
    const user = await User.create(body);
    return {
      message: 'User was successfully created',
      data: user,
    };
  }

  async update({ request }) {
    const { $user } = request;
    const { firstname, lastname, email, verified } = request.post();
    $user.firstname = firstname;
    $user.lastname = lastname;
    $user.email = email;
    $user.verified = verified;
    await $user.save();
    return {
      message: 'User was updated',
      data: $user,
    };
  }

  async delete({ request }) {
    const { $user } = request;
    await $user.delete();
    return {
      message: 'User was deleted',
      data: { id: $user.id },
    };
  }
}

module.exports = UserController;
