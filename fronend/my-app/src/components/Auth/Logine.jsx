import axios from "axios";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logine = ({setIsLogged}) => {
  const navigate =useNavigate()
  const [loggineUser, setLogginUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);



  function handlechange(e) {
    setLogginUser({
      ...loggineUser,
      [e.target.name]: e.target.value,
    });
  }
  function validate(data) {
    const err = {};

   
    if (data.email.trim() === "") {
      err.email = "pleas enter emails";

    }
    if (data.password.trim() === "") {
      err.password = "pleas enter password";
    }

    return err;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const valid = validate(loggineUser);
    setError(valid);
    if (Object.keys(valid).length === 0) {
      addUser(loggineUser);
    }
    console.log(valid);
  }

  async function addUser(data) {
    try {
      const res = await axios.post("http://localhost:8080/login", data, {
        withCredentials: true,
      });
      console.log("Response", res.data);
      toast.success(`Login successful: ${res.data.welcome}`); 
      if(res.data.welcome){
        localStorage.setItem("id",res.data?.id+res.data?.welcome)
        setIsLogged(localStorage.getItem("id"))
        navigate('/')
      }
    } catch (err) { 
    toast.error(err.response?.data || "An error occurred"); 
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] bg-slate-100">
        <form
          onSubmit={handleSubmit}
          className="p-2 h-[600px] w-[400px] bg-white shadow-sm border  flex flex-col items-center justify-center "
        >
          <div className="flex flex-col h-[80px]">
            <label>
              <input
                type="email"
                className="p-2 border  w-[300px] shadow-sm"
                placeholder="email"
                onChange={handlechange}
                name="email"
                value={loggineUser.email}
              />
            </label>
            {error?.email && (
              <span className="text-red-400">{error.email}</span>
            )}
          </div>
          <div className="flex flex-col h-[80px]">
            <label>
              <input
                type="password"
                className="p-2 border  w-[300px] shadow-sm"
                placeholder="password"
                onChange={handlechange}
                name="password"
                value={loggineUser.password}
              />
            </label>
            {error?.password && (
              <span className="text-red-400">{error.password}</span>
            )}
          </div>

          <div className="flex justify-between w-[300px] items-center">
            <button className="bg-blue-500 hover:bg-blue-600 p-2 shadow-sm text-white font-bold">
              Logine
            </button>
            <div className="text-gray-400" 
                 
            >
              {" "}
              register New account <button 
              onClick={()=>navigate('/register')}
              className="text-blue-500">register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Logine;
