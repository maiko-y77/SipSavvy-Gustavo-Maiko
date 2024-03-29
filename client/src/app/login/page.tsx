//SIGN IN PAGE
import './login.scss'
import LoginForm from "@/components/LoginForm/LoginForm";

export default function Login() {
  return (
    <>
      <div className="login-content">
        <h1>Unlock a world of wine knowledge.</h1>
        <p>Sign in to explore, learn, and savor with our vibrant wine community.</p>

        <LoginForm />
      </div>
    </>
  );
}