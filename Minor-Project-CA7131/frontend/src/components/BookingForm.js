import React, { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        course: '',
        year: '',
        occupancy: '',
        mobileNumber: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState(''); // For tracking submission status

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.status === 200) {
                setSubmissionStatus('Booking saved successfully!');
                setFormData({
                    name: '',
                    course: '',
                    year: '',
                    occupancy: '',
                    mobileNumber: '',
                });
            } else {
                setSubmissionStatus('Error saving booking. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmissionStatus('Error saving booking. Please try again.');
        }
    };

    return (
        <div className="booking-form-container">
            <h2>Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Course Field (with dropdown) */}
                <div className="form-field">
                    <label htmlFor="course">Course</label>
                    <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Course</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="BBA">BBA</option>
                        <option value="MBA">MBA</option>
                        <option value="BCA">BCA</option>
                        <option value="BA">BA</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="MA">MA</option>
                        <option value="B.Des">B.Des</option>
                    </select>
                </div>

                {/* Year Field (with dropdown) */}
                <div className="form-field">
                    <label htmlFor="year">Year</label>
                    <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="5th Year">5th Year</option>
                    </select>
                </div>

                {/* Occupancy Field (with dropdown) */}
                <div className="form-field">
                    <label htmlFor="occupancy">Occupancy</label>
                    <select
                        id="occupancy"
                        name="occupancy"
                        value={formData.occupancy}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Occupancy</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>

                {/* Mobile Number Field */}
                <div className="form-field">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>

            {/* Display confirmation or error message */}
            {submissionStatus && <div className="status-message">{submissionStatus}</div>}
        </div>
    );
};

export default BookingForm;
