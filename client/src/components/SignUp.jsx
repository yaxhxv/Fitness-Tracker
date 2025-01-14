import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <>
            <div className="container w-auto min-w-4">
                <div className="header bold text-2xl font-bold ">Create New Account 👋</div>
                <p className='font-light'>Please enter details to create a new account</p>
                <form className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label className="font-bold flex justify-items-start">Full Name</label>
                        <input type="text"
                            placeholder='Enter your name'
                            name='fullName'
                            value={formData.fullName}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 rounded-lg" />

                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-bold flex justify-items-start">Email Address</label>
                        <input type="text"
                            placeholder='Enter your email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 rounded-lg" />

                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-bold flex justify-items-start">Password</label>
                        <input type="password"
                            placeholder='Enter your password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 rounded-lg " n />

                    </div>
                    <Button onClick={handleClick} variant="contained">SignUp</Button>

                </form>
            </div>
        </>
    )
}

export default Signup;