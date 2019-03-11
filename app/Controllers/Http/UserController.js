'use strict'

class UserController {
    async get({ request }) {
        return {
            message: 'ok',
            data: 'user'
        };
    }

    async store({ request }) {
        return {
          message: 'User was successfully created',
          data: 'user'
        };
    }

    async update({ request }) {
        return {
            message: 'User was updated',
            data: {}
        };
    }

    async delete({ request }) {
        return {
            message: 'User was deleted',
            data: {}
        };
    }
}

module.exports = UserController
