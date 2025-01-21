import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';

function RegisterPage() {
    let [user, setUser] = useState({
        UserName: "",
        Email: "",
        Password: "",
        confirmPassword: "",
        Phone: ""
    });

    let navigate = useNavigate(); // Corrected the variable name to match the hook
    let [userExists, setUserExists] = useState([]);

    useEffect(() => {
        fetch('https://myreacttest-32b02-default-rtdb.firebaseio.com/UserForm.json')
            .then(res => res.json())
            .then((data) => {
                setUserExists(data ? Object.values(data) : []);
            });
    }, []);

    let userData = () => {
        fetch('https://myreacttest-32b02-default-rtdb.firebaseio.com/UserForm.json', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    };

    let resetForm = () => {
        setUser({
            UserName: "",
            Email: "",
            Password: "",
            Address: "",
            Phone: ""
        });
    };

    let onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    let onSubmit = (e) => {
        e.preventDefault();

        if (user.UserName === "" || user.Email === "" || user.Password === "" || user.Address === "" || user.Phone === "") {
            alert("Please fill all the fields");
        } else {
            if (userExists.some((item) => item.UserName.toLocaleLowerCase() === user.UserName.toLocaleLowerCase())) {
                alert("User already exists");
            } else if (userExists.some((item) => item.Email.toLocaleLowerCase() === user.Email.toLocaleLowerCase())) {
                alert("Email already exists");
            } else {
                userData();
                alert("User added successfully");
                resetForm();
                navigate("/Home"); // Corrected the function call to use the navigate function
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">

            <div className="w-1/2 bg-gradient-to-r from-orange-400 to-pink-600 text-white p-10 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold mb-4 text-center">We Connect Beyond Conversations</h4>
                    <p className="text-sm">
                        Join a community where friendships blossom, ideas thrive, and connections go beyond just chatting. Share your thoughts, engage in meaningful discussions, and explore a world of endless possibilities. Whether you're here to make new friends, collaborate, or just have fun, we're here to make every interaction memorable.
                    </p>
                </div>

                {/* Left Section */}
                <div className="w-1/2 p-8">
                    <div className="text-center mb-6">
                    
                        <h4 className="text-xl font-bold mt-4">Join <span className='text-red-600 border-b-2 border-b-black border-dashed text-2xl'>Friendly Chat </span>Platform</h4>
                    </div>
                    <p className="text-gray-800 mb-3 text-center">
                        Create your account
                    </p>
                    <form onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="UserName">
                                Full Name
                            </label>
                            <input
                                 value={user.UserName} onChange={onChange} name="UserName" id="UserName"
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                                Email Address
                            </label>
                            <input
                                value={user.Email} onChange={onChange} name="Email" id="Email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Phone">
                                Phone Number
                            </label>
                            <input
                                value={user.Phone} onChange={onChange} name="Phone" id="Email"
                                type="tel"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Password">
                                Password
                            </label>
                            <input
                                value={user.Password} onChange={onChange} name="Password" id="Password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                value={user.confirmPassword} onChange={onChange} name="confirmPassword" 
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="text-center mb-4">
                            <button className="w-full bg-gradient-to-r from-orange-400 to-pink-600 text-white py-2 px-4 rounded-lg hover:opacity-90">
                                REGISTER
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-center">
                        <p className="text-sm text-gray-600">Already have an account?</p>
                        <Link to="Login" className="ml-2 text-sm text-pink-600 font-bold">
                            LOG IN
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
               
            </div>
        </div>
    );
}

export default RegisterPage;
