const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

Route.group(() => {
  Route.post('authenticate', 'AuthController.authenticate');

  Route.get('users/:id', 'UserController.get').middleware(['findUser']);
  Route.post('users', 'UserController.store');
  Route.patch('users/:id', 'UserController.update').middleware(['findUser']);
  Route.delete('users/:id', 'UserController.delete').middleware(['findUser']);

  Route.get('posts/:id', 'PostController.get').middleware(['findPost']);
  Route.get('posts', 'PostController.list');
  Route.post('posts', 'PostController.store');
  Route.patch('posts/:id', 'PostController.update').middleware(['findPost']);
  Route.delete('posts/:id', 'PostController.delete').middleware(['findPost']);
}).prefix('api/v1');
