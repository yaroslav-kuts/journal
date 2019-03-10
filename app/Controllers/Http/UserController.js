'use strict'

class UserController {
    async get({ request }) {
        return {
            message: 'ok',
            data: 'user'
        };
    }

    async authenticate({ request, auth }) {
        return {
          message: 'Authentication was successfully completed',
          data: 'token'
        };
    }

    async store({ request }) {
        return {
          message: 'User was successfully created',
          data: 'user'
        };
    }

    async verify({ request }) {
        return {
            message: 'User was verified',
            data: {}
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
