"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Page = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      username: name,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:9000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      Cookies.set("token", data.token, { expires: 7 }); 
      window.localStorage.setItem("userId", data.userID);
      setIsLoggedIn(true);
      alert("Login successful");
    } catch (error) {
      console.error("There was a problem with the login:", error);
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    window.localStorage.removeItem("userId");
    setIsLoggedIn(false);
    alert("Logged out successfully");
  };

  if (isLoggedIn) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
        <div className="bg-white p-6 rounded shadow-md">
          <p className="mb-4">You are logged in</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Page;
