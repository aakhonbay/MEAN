const EventsSchema = require('./events')
const UsersSchema = require('./user')

const mongoose = require('../config/mongoose');
const GroupsSchema = new mongoose.Schema({
    location:{ type: String },
    interests:[],
    title: { type: String, required: true, minlength: 2},
    description: { type: String, default: ''},
    agrrement:{ type: Boolean },
    users: [UsersSchema.schema],
    events: [EventsSchema.schema],
    image: { type: String },
    photos: []
}, {timestamps: true });
mongoose.model('Groups', GroupsSchema);
const Groups = mongoose.model('Groups');
module.exports = Groups;