import React from "react";
import { useNavigate } from "react-router-dom";

const HomeMain = () => {
  const navigate = useNavigate()
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col gap-4 bg-slate-200">
      <button className="bg-blue-500 p-2 text-white font-bold w-[300px] hover:bg-blue-600"
        onClick={()=>navigate('/login')}
      >
        Login
      </button>
      <button
      onClick={()=>navigate('/register')}
      className=" bg-white shadow-sm p-2 text-blue-600 font-bold w-[300px] hover:bg-slate-50">
        Register
      </button>
    </div>
  );
};

export default HomeMain;
