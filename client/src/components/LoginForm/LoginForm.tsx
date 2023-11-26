"use client";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const LoginForm = () => {
  const email = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: email.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="login-form">
      <div className="form-group">
        <label>Your email</label>
        <input
          name="email"
          type="email"
          onChange={(e) => (email.current = e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Your Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => (pass.current = e.target.value)}
        />
      </div>

      <button onClick={onSubmit}>Sign In</button>
    </div>
  );
};

export default LoginForm;
