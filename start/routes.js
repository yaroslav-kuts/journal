const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

Route.group(() => {
  Route.post('authenticate', 'AuthController.authenticate');

  Route.get('users/:userId', 'UserController.get')
    .middleware(['auth:jwt', 'findUser']);
  Route.post('users', 'UserController.store');
  Route.patch('users/:userId', 'UserController.update')
    .middleware(['auth:jwt', 'findUser']);
  Route.delete('users/:userId', 'UserController.delete')
    .middleware(['auth:jwt', 'findUser']);

  Route.get('users/:userId/posts/:postId', 'PostController.get')
    .middleware(['auth:jwt', 'findPost']);
  Route.get('users/:userId/posts', 'PostController.list')
    .middleware(['auth:jwt']);
  Route.post('users/:userId/posts', 'PostController.store')
    .middleware(['auth:jwt']);
  Route.patch('users/:userId/posts/:postId', 'PostController.update')
    .middleware(['auth:jwt', 'findPost']);
  Route.delete('users/:userId/posts/:postId', 'PostController.delete')
    .middleware(['auth:jwt', 'findPost']);
}).prefix('api/v1');
