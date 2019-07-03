var tasks_controller = require('../controllers/tasksController');

module.exports = (router) => {
    
    router.post('/register', tasks_controller.register);

    router.post('/login', tasks_controller.login);

    return router;
}