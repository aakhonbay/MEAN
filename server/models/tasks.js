const mongoose = require('../config/mongoose');
const TasksAPISchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2},
    description: { type: String, default: ''},
    completed: { type: Boolean, default: false}
}, {timestamps: true });
mongoose.model('Tasks', TasksAPISchema);
const Tasks = mongoose.model('Tasks');
module.exports = Tasks;