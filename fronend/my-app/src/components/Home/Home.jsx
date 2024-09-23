import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const Home = ({logged,setIsLogged}) => {
    const handleLogout = async () => {
        try {
            const id =localStorage.getItem("id")
            
            localStorage.clear()
          const response = await axios.post('http://localhost:8080/logout', JSON.stringify(id), { withCredentials: true });
          toast.success(response.data.message); 
          setIsLogged(false)

        } catch (error) {
          toast.error(`Error during logout: ${error.response?.data?.error || 'An error occurred'}`);
        }
      };
    
      return (
    <div>
        <div className='font-bold text-2xl bg-blue-500  h-[60px] flex items-center p-2 justify-between'  >
          <div>Welcome  <span className='ml-2 text-white'>  {logged.slice(1)}  </span></div> <button onClick={handleLogout}>Logout </button>
        </div>
       
    </div>
      );
    };

export default Home
