import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Register = () => {

    const [respos,setRespos] =useState({ first_name: "salsaman", last_name: "faris", email: "sssjnjnalmjjhjhbjbghan@gmail.com", password: "salman",})
  


 async function addUser(data){
    try{
        const res =await axios.post("http://localhost:8080/register",data)
        console.log("respose",res.data);
    }catch(err){
        console.log(err.response.data);
    }
 }
   

    return (
        <div >
            <button onClick={()=>addUser(respos)}>SUBMIT</button>
          lkmni
        </div>
    );
};

export default Register;
