const LoginForm = () => {
    return (
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
    );
}

export default LoginForm;