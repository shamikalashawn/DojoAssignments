const mongoose = require('mongoose');
const { Schema } = mongoose;
const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    position: String,
    status: {
        type: String,
        default: 'Undecided'
    }
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchema);