const Tasks = require('../models/tasks');
const User = require('../models/user');
var mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const jwt = require('jsonwebtoken')

exports.ObjectId = ObjectId;

exports.getAngular = (req, res) => {
    // console.log(__dirname + '/../../my-angular-app/dist/my-angular-app/index.html')
    res.sendFile('../../my-angular-app/dist/my-angular-app/index.html');
  };

exports.showAll = 
(req, res) => {
    Tasks.find(function(err, data){
        if(err) {
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", tasks: data });
        }
    });
};
exports.showLike =
(req, res) => {
    let id = req.params.id;
    Tasks.find(new RegExp('^'+id+'*', "i"), (err, data) => {
        if(err) {
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", tasks: data });
        }
    })
};
exports.showOne =
(req, res) => {
    Tasks.findById({ _id: ObjectId(req.params.id) }, (err, data) => {
        if(!data) {
            res.status(401).send('Invalid id')
        } else
        if (data.message == 'Error') {
            res.status(401).send('Invalid id Error')
        } else {
            res.status(200).json({ message: "Success", tasks: data });
        }
    })
};
exports.create =
(req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let completed = req.body.completed;
    let dataPost = new Tasks({ title: title, description: description, completed: completed });
    dataPost.save((err, data) => {
        if(err){
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Success", tasks: data })
        }
    })
};
exports.update = function(req, res){
    Tasks.findByIdAndUpdate({ _id: ObjectId(req.params.id) }, { title: req.body.title, description: req.body.description, completed: req.body.completed }, function(err, data){
        if(err) {
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", tasks: data });
        }
    })
};
exports.updateState = function(req, res){
    Tasks.findByIdAndUpdate({ _id: ObjectId(req.params.id) }, { completed: req.body.completed }, function(err, data){
        if(err) {
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", tasks: data });
        }
    })
};
exports.delete =
(req, res) => {
    Tasks.findByIdAndDelete({ _id: ObjectId(req.params.id) }, function(err, data){
        if(err) {
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", tasks: data });
        }
    })
};

exports.register =
(req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = new User({ email: email, password: password });
    user.save((err, data) => {
        if(err){
            res.json({ message: "Error", error: err })
        } else {
            let payload = { subject: data._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).json({ token });
        }
    })
};

exports.login =
(req, res) => {
    User.findOne({ email: req.body.email, password: req.body.password }, (err, data) => {
        if(!data) {
            res.status(401).send('Invalid email')
        } else
        if (data.message == 'Error') {
            res.status(401).send('Invalid email Error')
        } else {
            let payload = { subject: data._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).json({ token });
        }
    })
};