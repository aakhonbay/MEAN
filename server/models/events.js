const UsersSchema = require('./user')
const GroupsSchema = require('./groups')

const mongoose = require('../config/mongoose');
const EventsSchema = new mongoose.Schema({
    location:{ type: String },
    title: { type: String, required: true, minlength: 2},
    description: { type: String, default: ''},
    users: [UsersSchema.schema],
    image: { type: String },
    photos: []
}, {timestamps: true });
mongoose.model('Events', EventsSchema);
const Events = mongoose.model('Events');

module.exports = Events;