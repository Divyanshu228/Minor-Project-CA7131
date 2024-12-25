const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    occupancy: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
