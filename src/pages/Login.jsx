import React from "react";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import bgImage from '../assets/login-background.png';
const Login = () => {
  const { login, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleLogin = async (email, password) => {
    if (!email || !password) {
      toast.error("Please fill in both email and password");
      return;
    }
    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      console.log("login errorrrrrrrrrrrrrrrrr", err);
      toast.error("Login failed. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center"
    >
      <div className="bg-[rgba(30,41,49,0.3)] backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-white">
          PAL Admin - Login
        </h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-white">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 pr-12 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <button
            className=" cursor-pointer w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => handleLogin(email, password)}
          >
            Log In
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Login;





