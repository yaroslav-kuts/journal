'use strict'

class AuthController {
    async authenticate({ request, auth }) {
        return {
          message: 'Authentication was successfully completed',
          data: 'token'
        };
    }
}

module.exports = AuthController
