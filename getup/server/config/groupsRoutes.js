const jwt = require('jsonwebtoken')

function verifyToken(req, res, next){
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
        return res.status(401).send('Unauthorized request')        
    }
    req.userId = payload.subject
    next()
}

var groups_controller = require('../controllers/groupsController');

module.exports = (router) => {
    // router.get('like/:id', groups_controller.showLike);

    router.get('/', groups_controller.showAll);
    router.get('/', verifyToken, groups_controller.showAll);

    router.get('/:id', groups_controller.showOne);

    router.post('/', groups_controller.create);

    // router.put(':id/state', groups_controller.updateState);

    // router.put(':id', groups_controller.update);

    router.delete('/:id', groups_controller.delete);

    router.post('/destroy', groups_controller.deleteAll);

    router.put('/:id/user', groups_controller.putUser);

    router.put('/:id/event', groups_controller.putEvent);

    return router;
}