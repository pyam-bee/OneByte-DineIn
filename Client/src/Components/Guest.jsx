import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Guest = () => {
    const navigate = useNavigate();

    // State variables to hold form input values
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    // Function to handle form submission
    async function handleSubmit(e) {
        e.preventDefault(); // Prevent form from refreshing the page

        // Validate input fields
        if (!username) {
            alert("Please enter a username");
            return;
        }

        if (!email) {
            alert("Please enter an email address");
            return;
        }

        try {
            // Send POST request to server
            const response = await axios.post("http://localhost:8000/", {
                text: username,
                email: email
            });

            // Handle server response
            if (response.data === "exist") {
                alert("Your account is already registered");
            } else if (response.data === "notexist") {
                // Navigate to home page if registration is successful
                navigate("/home", { state: { id: username } });
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <div>
            <h1>Guest:</h1>

            {/* Form for guest registration */}
            <form onSubmit={handleSubmit}>
                {/* Input field for username */}
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />

                {/* Input field for email */}
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />

                {/* Submit button */}
                <input type="submit" value="Register" />
            </form>

            <br />
            <p>OR</p>
            <br />

            {/* Link to Staff registration page */}
            <Link to="/staff">Are you Staff?</Link>
        </div>
    );
};

export default Guest;
