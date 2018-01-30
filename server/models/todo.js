const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt: { 
        type: Number,
        default: null
    }

});

var Todo = mongoose.model('Todo', TodoSchema);

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });
// var otherTodo = new Todo({
//     text: 'Eat dinner',
//     completed: false,
//     completedAt: 3
// });


// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// otherTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

module.exports = {Todo};