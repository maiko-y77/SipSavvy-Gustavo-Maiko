"use client";
import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const checkUserExists = async () => {
    const { email } = formData
    try {
      const response = await fetch(`http://localhost:3001/users/check/${email}`);
      const data = await response.json();
     
      if(data){
        return true
      }

      return false;
      
    } catch (error) {
      return false;
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        setError("Passwords don't match")
        return;
    }

    const userExists = await checkUserExists();

    if (userExists) {
      setError("User already exists")
      return;
    }

    console.log(formData)

    setError("")
    setFormData({
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  };

  return (
    <form className="register-form" onSubmit={onSubmit}>
      {error && <div>{error}</div>}
      <div className="form-group">
        <label>Name</label>
        <input name="name" type="text" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input name="lastName" type="text" value={formData.lastName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Your Password</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Confirm your Password</label>
        <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
      </div>

      <button>Sign Up</button>
    </form>
  );
};

export default RegisterForm;
