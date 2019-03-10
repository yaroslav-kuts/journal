'use strict'

class PostController {
    async get({ request }) {
        return {
            message: 'ok',
            data: {}
        };
    }

    async list() {
        return {
            message: 'ok',
            data: {}
        };
    }

    async store({ request }) {
        return {
            message: 'Product was created',
            data: {}
        };
    }

    async update({ request }) {
        return {
            message: 'Product was updated',
            data: {}
        };
    }

    async delete({ request }) {
        return {
            message: 'Product was deleted',
            data: {}
        };
    }  
}

module.exports = PostController
