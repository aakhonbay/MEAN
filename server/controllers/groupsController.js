const Groups = require('../models/groups');
const User = require('../models/user');
var mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const jwt = require('jsonwebtoken')

exports.ObjectId = ObjectId;

exports.getAngular = (req, res) => {
    res.sendFile('../../my-angular-app/dist/my-angular-app/index.html');
  };

exports.showAll = 
(req, res) => {
    Groups.find(function(err, data){
        console.log('SHOW ALL GROUPS')
        if(err) {
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", groups: data });
        }
    });
};
exports.showLike =
(req, res) => {
    let id = req.params.id;
    Tasks.find(new RegExp('^'+id+'*', "i"), (err, data) => {
        if(err) {
            console.error(err);
            res.json({ message: "Error", error: err});
        }
        else{
            console.log(data)
            res.json({ message: "Success", tasks: data });
        }
    })
};
exports.showOne =
(req, res) => {
    Groups.findById({ _id: ObjectId(req.params.id) }, (err, data) => {
        if(!data) {
            res.status(401).send('Invalid id')
        } else
        if (data.message == 'Error') {
            res.status(401).send('Invalid id Error')
        } else {
            res.status(200).json({ message: "Success", groups: data });
        }
    })
};
exports.create =
(req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    // let user = req.body.users;
    let user = { email: 'email', password: 'password'};
    // let event = req.body.events;
    let event = { name: 'fun event', date: 'now' };
    let location = req.body.location;
    let interests = req.body.interests;
    let agreement = req.body.agreement;
    let image = "https://secure.meetupstatic.com/photos/event/d/2/d/1/600_461693969.jpeg";
    console.log(title, description, user, event)
    // let users = req.body.user;
    // let events = req.body.event;
    let dataPost = new Groups({ title: title, description: description, location: location, agreement: agreement, image:image });
    dataPost.users.push(user)
    dataPost.events.push(event)
    dataPost.interests.push(interests)
    console.log(dataPost)
    dataPost.save((err, data) => {
        if(err){
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Success", groups: data })
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
    
    Groups.findByIdAndDelete({ _id: ObjectId(req.params.id) }, function(err, data){
        if(err) {
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", tasks: data });
        }
    })
};
exports.deleteAll =
(req, res) => {
    console.log('DELETE ALL')
    Groups.remove({ }, function(err, data){
        if(err) {
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", tasks: data });
        }
    })
};
exports.putUser = function(req, res){
    Groups.findByIdAndUpdate({ _id: ObjectId(req.params.id) }, { $push: {users: {email: 'email', password: 'password'} } }, function(err, data){
        if(err) {
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", groups: data });
        }
    })
};
exports.putEvent = function(req, res){
    Groups.findByIdAndUpdate({ _id: ObjectId(req.params.id) }, { $push: {events: {name: 'fun', date: 'now'} } }, function(err, data){
        if(err) {
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", groups: data });
        }
    })
};