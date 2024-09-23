import axios from 'axios';
import React, { useState } from 'react'

const Logine = () => {

     const [respos,setRespos] =useState({  email: "salman@gmail.com", password: "salman",})
  


     async function addUser(data) {
        try {
          const res = await axios.post('http://localhost:8080/login', data, { withCredentials: true });
          console.log('Response', res.data);
          setRespos(`Login successful: ${res.data.welcome}`); // Display success message
        } catch (err) {
          console.log(err.response?.data);
          setRespos(`Error: ${err.response?.data?.error || 'An error occurred'}`); // Display error message
        }

        console.log("oop",respos);
      }
    

    return (
        <div >
            <button onClick={()=>addUser(respos)}>Login</button>
          lkmni
        </div>
    );
};


export default Logine
