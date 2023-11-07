const UserControllers= require('./controllers/UserController')

module.exports=[
    {
        endpoint: '/users',
        method: 'GET',
        handler: UserControllers.listUsers,
    },
    {
        endpoint: '/produtos',
        method: 'GET',
        handler: UserControllers.listUsers,
    },
]