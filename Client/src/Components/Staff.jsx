import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Staff = () => {
    const navigate = useNavigate();

    // State variables to hold form input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    async function handleSubmit(e) {
        e.preventDefault(); // Prevent form from refreshing the page

        // Validate input fields
        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        try {
            // Send POST request to server
            const response = await axios.post("http://localhost:8000/staff", {
                text: username,
                password
            });

            // Handle server response
            if (response.data === "exist") {
                // Navigate to home page if login is successful
                navigate("/home", { state: { id: username } });
            } else if (response.data === "notexist") {
                alert("Staff not registered. Please contact the administrator.");
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <div>
            <h1>Staff</h1>

            {/* Form for staff login */}
            <form onSubmit={handleSubmit}>
                {/* Input field for username */}
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />

                {/* Input field for password */}
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />

                {/* Submit button */}
                <input type="submit" value="Log In" />
            </form>

            <br />
            <p>OR</p>
            <br />

            {/* Link to Guest registration page */}
            <Link to="/">Register as Guest</Link>
        </div>
    );
};

export default Staff;
