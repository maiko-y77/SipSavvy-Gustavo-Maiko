"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const checkUserExists = async () => {
    const { email } = formData;
    try {
      const response = await fetch(
        `http://localhost:3001/users/check/${email}`
      );
      if (response.ok) {
        const data = await response.json();
        return data.exists;
      }
      return false;
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false;
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    const userExists = await checkUserExists();

    if (userExists) {
      setError("User already exists");
      return;
    }

    setError("");

    // prepare data to send to the server
    const { name, lastName, email, password } = formData;
    let username = name + lastName.replace(/\s/g, "").toLowerCase();
    username.toLowerCase();
    const role = "user";
    const avatar =
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const emailVerified = true;
    const followers = [];
    const following = [];

    // send data to the server

    try {
      const response = await axios.post("http://localhost:3001/users/new", {
        data: {
          username: username,
          name: name,
          last_name: lastName,
          email: email,
          password: password,
          role: role,
          avatar: avatar,
          email_verified: emailVerified,
        },
      });

      if (response.status === 200) {
        setFormData({
          name: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        router.push("/login");
      }
    } catch (error) {
      setError("Couldn't complete your registration. Please try again later!");
    }
  };

  return (
    <form className="register-form" onSubmit={onSubmit}>
      {error && <div>{error}</div>}
      <div className="form-group">
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Your Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Confirm your Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <button>Sign Up</button>
    </form>
  );
};

export default RegisterForm;
