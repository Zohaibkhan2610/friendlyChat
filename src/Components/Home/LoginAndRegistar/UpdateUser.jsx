import React, { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router";

function UpdateUser() {
    // User input state for finding user
    const [loginInput, setLoginInput] = useState({
        UserName: "",
        Email: "",
    });
    let navigate = useNavigate();

    // State to hold fetched user data
    const [userExists, setUserExists] = useState([]);
    // State to hold matched user data
    const [matchedUser, setMatchedUser] = useState(null);
    // State for updated user data
    const [updatedUser, setUpdatedUser] = useState(null);
    // State to toggle forms
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    // Fetch data from Firebase on component mount
    useEffect(() => {
        fetch("https://myreacttest-32b02-default-rtdb.firebaseio.com/UserForm.json")
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    const formattedData = Object.entries(data).map(([key, value]) => ({
                        id: key,
                        ...value,
                    }));
                    setUserExists(formattedData);
                } else {
                    setUserExists([]);
                }
            });
    }, []);

    // Handle login input changes
    const handleLoginInputChange = (e) => {
        setLoginInput({
            ...loginInput,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission to find user
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        if (loginInput.UserName === "" || loginInput.Email === "") {
            alert("Please fill all the fields");
        } else {
            const matchingUser = userExists.find(
                (item) =>
                    (item.UserName.toLocaleLowerCase() === loginInput.UserName.toLocaleLowerCase() &&
                        item.Email === loginInput.Email)
            );

            if (!matchingUser) {
                alert("User does not exist or credentials are incorrect");
                setMatchedUser(null);
                setUpdatedUser(null);
            } else {
                setMatchedUser(matchingUser); // Store matched user data
                setUpdatedUser(matchingUser); // Prepare for editing
                setIsUpdateMode(true); // Switch to update mode
            }
        }
    };

    // Handle update input changes
    const handleUpdateInputChange = (e) => {
        setUpdatedUser({
            ...updatedUser,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission to update user data
    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        // Update the user data in Firebase
        fetch(`https://myreacttest-32b02-default-rtdb.firebaseio.com/UserForm/${updatedUser.id}.json`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                UserName: updatedUser.UserName,
                Email: updatedUser.Email,
                Password: updatedUser.Password,
                confirmPassword: updatedUser.confirmPassword,
                Phone: updatedUser.Phone,
            }),
        })
            .then((res) => {
                if (res.ok) {
                    alert("User data updated successfully");
                    setUserExists((prevUsers) =>
                        prevUsers.map((user) =>
                            user.id === updatedUser.id ? updatedUser : user
                        )
                    );
                    navigate("/Home");
                } else {
                    alert("Failed to update user data");
                }
            })
            .catch((err) => {
                console.error("Error updating user:", err);
                alert("An error occurred while updating the user.");
            });
        setLoginInput({
            UserName: "",
            Email: "",
            Password: "",
        })
    };

    return (
        <div className="">
            {!isUpdateMode ? (
                // Find User Form
                <>
                    <div className="min-h-screen flex items-center justify-center bg-gray-100">
                        <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="w-1/2 p-8">
                                <div className="text-center mb-6">
                                    <p className='text-2xl font-bold mb-2 text-red-600'>Friendly Chat</p>
                                    <h4 className="text-xl font-bold mt-4">We are The Lotus Team</h4>
                                </div>
                                <p className="text-gray-600 mb-6 text-center">
                                    Please Type UserName & Email of your account
                                </p>
                                <form onSubmit={handleLoginSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">UserName</label>
                                        <input
                                            required
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"

                                            type="text"
                                            value={loginInput.UserName}
                                            onChange={handleLoginInputChange}
                                            name="UserName"
                                            id="userName"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">Email</label>
                                        <input
                                            required
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"

                                            type="email"
                                            value={loginInput.Email}
                                            onChange={handleLoginInputChange}
                                            name="Email"
                                            id="Email"
                                        />
                                    </div>

                                    <button className="w-full bg-gradient-to-r from-orange-400 to-pink-600 text-white py-2 px-4 rounded-lg hover:opacity-90" type="submit">Submit</button>
                                    <Link to="/" className="duration-500 text-4xl text-gray-600 hover:text-gray-800">
                <MdArrowBack className="border rounded-full font-semibold text-red-600 mt-3 hover:text-white hover:bg-red-600 p-2"/></Link>
                                </form>
                            </div>
                            <div className="w-1/2 bg-gradient-to-r from-orange-400 to-pink-600 text-white p-10 flex flex-col justify-center ">
                                <h4 className="text-2xl font-bold mb-4 text-center capitalize">
                                    Forget Password of Your <span className='text-white text-3xl font-bold'>Friendly Chat</span></h4>
                                <p className="text-sm">
                                    Join a community where friendships blossom, ideas thrive, and connections go beyond just chatting. Share your thoughts, engage in meaningful discussions, and explore a world of endless possibilities. Whether you're here to make new friends, collaborate, or just have fun, we're here to make every interaction memorable.
                                </p>
                            </div>
                        </div>

                    </div>

                </>
            ) : (
                // Update User Form
                <>
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                        <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="w-1/2 p-8">
                                <div className="text-center mb-6">
                                    <p className='text-2xl font-bold mb-2 text-red-600'>Friendly Chat</p>
                                    <h4 className="text-xl font-bold mt-4">We are The Lotus Team</h4>
                                </div>
                                <p className="text-gray-600 mb-6 text-center">
                                    Please Type User Email of your account
                                </p>
                    <form onSubmit={handleUpdateSubmit}>
                    <div className="text-left mb-6">
                        <div className="mb-4">
                            <label htmlFor="updateUserName">UserName</label>
                            <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                required
                                type="text"
                                value={updatedUser.UserName}
                                onChange={handleUpdateInputChange}
                                name="UserName"
                                id="updateUserName"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="updateEmail">Email</label>
                            <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                required
                                type="email"
                                value={updatedUser.Email}
                                onChange={handleUpdateInputChange}
                                name="Email"
                                id="updateEmail"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="updatePassword">Password</label>
                            <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                required
                                type="password"
                                value={updatedUser.Password}
                                onChange={handleUpdateInputChange}
                                name="Password"
                                id="updatePassword"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="updateconfirmPassword">Confirm Password</label>
                            <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                type="text"
                                value={updatedUser.confirmPassword || ""}
                                onChange={handleUpdateInputChange}
                                name="confirmPassword"
                                id="updateconfirmPassword"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Phone">Phone</label>
                            <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                type="text"
                                value={updatedUser.Phone || ""}
                                onChange={handleUpdateInputChange}
                                name="Phone"
                                id="Phone"
                            />
                        </div>

                        <button className="w-full bg-gradient-to-r from-orange-400 to-pink-600 text-white py-2 px-4 rounded-lg hover:opacity-90" type="submit">Update User</button>
                    </div>

                    </form>
                    </div>
                            <div className="w-1/2 bg-gradient-to-r from-orange-400 to-pink-600 text-white p-10 flex flex-col justify-center ">
                                <h4 className="text-xl font-bold mb-4 text-center capitalize">
                                    Your can Change <br /> <span className='text-white text-3xl font-bold'>Friendly Chat</span> <br /> Password And Other THings Now</h4>
                                <p className="text-sm">
                                    Join a community where friendships blossom, ideas thrive, and connections go beyond just chatting. Share your thoughts, engage in meaningful discussions, and explore a world of endless possibilities. Whether you're here to make new friends, collaborate, or just have fun, we're here to make every interaction memorable.
                                </p>
                            </div>
                        </div>

                    </div>

                </>
            )}
        </div>
    );
}

export default UpdateUser;