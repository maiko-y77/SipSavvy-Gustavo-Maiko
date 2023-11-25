"use client";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const LoginForm = () => {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/feed",
    });
  };

  return (
    <form className="login-form">
      <div className="form-group">
        <label>Your email</label>
        <input name="email" type="email" onChange={(e) => (userName.current = e.target.value)} />
      </div>

      <div className="form-group">
        <label>Your Password</label>
        <input name="password" type="password" onChange={(e) => (userName.current = e.target.value)} />
      </div>

      <button onClick={onSubmit}>Sign In</button>
    </form>
  );
};

export default LoginForm;
