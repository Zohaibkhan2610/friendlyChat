import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';

function LoginPage() {
  let [user, setUser] = useState({
    UserName: "",
    Password: "",
});
let navigate = useNavigate();
// State to hold fetched user data
let [userExists, setUserExists] = useState([]);
// State to hold matched user data
let [matchedUser, setMatchedUser] = useState(null);

// Fetch data from Firebase on component mount
useEffect(() => {
    fetch('https://myreacttest-32b02-default-rtdb.firebaseio.com/UserForm.json')
        .then(res => res.json())
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

// Handle input changes
let onChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value,
    });
};

// Handle form submission
let onSubmit = (e) => {
  e.preventDefault();

  // Ensure all fields are filled
  if (user.UserName === "" || user.Password === "") {
      alert("Please fill all the fields");
  } else {
      // Find the user based on input
      const matchingUser = userExists.find((item) =>
          (item.UserName.toLocaleLowerCase() === user.UserName.toLocaleLowerCase() &&
          item.Password.toLocaleLowerCase() === user.Password.toLocaleLowerCase()
      ));

      if (!matchingUser) {
          alert("User does not exist or credentials are incorrect");
          setMatchedUser(null);
      } else {
          setMatchedUser(matchingUser); // Store matched user data
          navigate("/Home");
      }
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-8">
          <div className="text-center mb-6">
            <p className='text-2xl font-bold mb-2 text-red-600'>Friendly Chat</p>
            <h4 className="text-xl font-bold mt-4">We are The Lotus Team</h4>
          </div>
          <p className="text-gray-600 mb-6 text-center">
            Please login to your account
          </p>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
               value={user.UserName} onChange={onChange} name="UserName" id="UserName"
                type="text"
                placeholder="Enter your username"
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
            <div className="text-center mb-4">
              <button className="w-full bg-gradient-to-r from-orange-400 to-pink-600 text-white py-2 px-4 rounded-lg hover:opacity-90">
                LOG IN
              </button>
              <Link to="ForgetPassword" className="text-sm text-gray-500 mt-2 block">
                Forgot password?
              </Link>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-600">Don't have an account?</p>
            <Link to="Register" className="ml-2 text-sm text-pink-600 font-bold">
              CREATE NEW
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-gradient-to-r from-orange-400 to-pink-600 text-white p-10 flex flex-col justify-center ">
          <h4 className="text-2xl font-bold mb-4 text-center capitalize">
            We are Welcome you on <span className='text-white text-3xl font-bold'>Friendly Chat</span></h4>
          <p className="text-sm">
          Join a community where friendships blossom, ideas thrive, and connections go beyond just chatting. Share your thoughts, engage in meaningful discussions, and explore a world of endless possibilities. Whether you're here to make new friends, collaborate, or just have fun, we're here to make every interaction memorable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
