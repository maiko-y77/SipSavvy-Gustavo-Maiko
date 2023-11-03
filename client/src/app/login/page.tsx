//SIGN IN PAGE

export default function Login() {
  return (
    <>
      <div className="login-content">
        <h1>Unlock a world of wine knowledge.</h1>
        <p>Sign in to explore, learn, and savor with our vibrant wine community.</p>

        <form className="login-form">
          <div className="form-group">
            <label>Your email</label>
            <input name="email" type="email" />
          </div>

          <div className="form-group">
            <label>Your Password</label>
            <input name="password" type="password" />
          </div>

          <button>Sign In</button>
        </form>
      </div>
    </>
  );
}