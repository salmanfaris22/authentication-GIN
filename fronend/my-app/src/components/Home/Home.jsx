import axios from 'axios';
import React, { useState } from 'react'

const Home = () => {
    const handleLogout = async () => {
        try {
          const response = await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
          console.log(response.data.message); // Handle successful logout message
        } catch (error) {
          console.error(`Error during logout: ${error.response?.data?.error || 'An error occurred'}`);
        }
      };
    
      return (
        <button onClick={handleLogout}>Logout</button>
      );
    };

export default Home
