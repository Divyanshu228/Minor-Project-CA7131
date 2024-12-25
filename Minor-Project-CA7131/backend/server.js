const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
// Import the Booking model
const Booking = require('./models/Booking'); // Adjust the path as needed

// MongoDB connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch((err) => console.log('MongoDB connection error:', err));

    require('dotenv').config();
    // const mongoose = require('mongoose');
    
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Connection failed:', err));

      

// POST route for booking data submission
app.post('/api/booking', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(200).send({ message: 'Booking saved successfully' });
    } catch (err) {
        console.error('Error saving booking:', err); // Log the error
        res.status(500).send({ message: 'Error saving booking', error: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
