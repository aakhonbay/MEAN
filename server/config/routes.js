// const mongoose = require('mongoose');
// const tasks_controller = require('../../controllers/tasksController');
// var ObjectId = mongoose.Types.ObjectId;
// var express = require('express');

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

var tasks_controller = require('../controllers/tasksController');

// module.exports = function(router){

module.exports = (router) => {
    
    router.get('/like/:id', tasks_controller.showLike);

    // router.get('', tasks_controller.showAll);
    router.get('/', verifyToken, tasks_controller.showAll);

    router.get('/:id', tasks_controller.showOne);

    router.post('/', tasks_controller.create);

    router.put('/:id/state', tasks_controller.updateState);

    router.put('/:id', tasks_controller.update);


    router.delete('/:id', tasks_controller.delete);

    return router;
}