'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

Route.group(() => {
    Route.post('authenticate', 'AuthController.authenticate');

    Route.get('users/:id', 'UserController.get');
    Route.post('users', 'UserController.store');
    Route.patch('users/:id', 'UserController.update')
    Route.delete('users/:id', 'UserController.delete');

    Route.get('posts/:id', 'PostController.get');
    Route.get('posts', 'PostController.list');
    Route.post('posts', 'PostController.store');
    Route.patch('posts/:id', 'PostController.update')
    Route.delete('posts/:id', 'PostController.delete');
  }).prefix('api/v1');
