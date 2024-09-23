import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
    });
    const [error, setError] = useState({});

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function validate(data) {
        const err = {};

        if (data.first_name.trim() === "") {
            err.first_name = "Please enter your first name.";
        }
        if (data.last_name.trim() === "") {
            err.last_name = "Please enter your last name.";
        }
        if (data.email.trim() === "") {
            err.email = "Please enter your email.";
        }
        if (data.password.trim() === "") {
            err.password = "Please enter your password.";
        } else if (data.password.length < 8) {
            err.password = "Password must be at least 8 characters.";
        } else if (data.confirm_password !== data.password) {
            err.confirm_password = "Passwords do not match.";
        }

        return err;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const valid = validate(formData);
        setError(valid);
        if (Object.keys(valid).length === 0) {
            addUser(formData);
        }
    }

    async function addUser(data) {
        try {
            const res = await axios.post("http://localhost:8080/register", data);
            if (res.status === 200) {
                toast.success("Registered successfully");
                navigate("/login");
            }
        } catch (err) {
            const msg = err.response.data;
            toast.warn("Please check your input");
            toast.warning(msg.error);
        }
    }

    return (
        <div className="flex justify-center items-center h-[100vh] bg-slate-100">
            <form
                onSubmit={handleSubmit}
                className="p-2 h-[600px] w-[400px] bg-white shadow-sm border flex flex-col items-center justify-center"
            >
                <div className="flex flex-col h-[70px]">
                    <label>
                        <input
                            type="text"
                            className="p-2 border w-[300px] shadow-sm"
                            placeholder="First Name"
                            onChange={handleChange}
                            name="first_name"
                            value={formData.first_name}
                        />
                    </label>
                    {error.first_name && (
                        <span className="text-red-400">{error.first_name}</span>
                    )}
                </div>
                <div className="flex flex-col h-[70px]">
                    <label>
                        <input
                            type="text"
                            className="p-2 border w-[300px] shadow-sm"
                            placeholder="Last Name"
                            onChange={handleChange}
                            name="last_name"
                            value={formData.last_name}
                        />
                    </label>
                    {error.last_name && (
                        <span className="text-red-400">{error.last_name}</span>
                    )}
                </div>
                <div className="flex flex-col h-[80px]">
                    <label>
                        <input
                            type="email"
                            className="p-2 border w-[300px] shadow-sm"
                            placeholder="Email"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                        />
                    </label>
                    {error.email && <span className="text-red-400">{error.email}</span>}
                </div>
                <div className="flex flex-col h-[80px]">
                    <label>
                        <input
                            type="password"
                            className="p-2 border w-[300px] shadow-sm"
                            placeholder="Password"
                            onChange={handleChange}
                            name="password"
                            value={formData.password}
                        />
                    </label>
                    {error.password && (
                        <span className="text-red-400">{error.password}</span>
                    )}
                </div>
                <div className="flex flex-col h-[80px]">
                    <label>
                        <input
                            type="password"
                            onChange={handleChange}
                            name="confirm_password" 
                            value={formData.confirm_password}
                            className="p-2 border w-[300px] shadow-sm"
                            placeholder="Confirm Password"
                        />
                    </label>
                    {error.confirm_password && (
                        <span className="text-red-400">{error.confirm_password}</span>
                    )}
                </div>
                <div className="flex justify-between w-[300px] items-center">
                    <button className="bg-blue-500 hover:bg-blue-600 p-2 shadow-sm text-white font-bold">
                        Register
                    </button>
                    <div className="text-gray-400">
                        If you already have an account,{" "}
                        <button onClick={() => navigate("/login")} className="text-blue-500">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
