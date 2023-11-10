const RegisterForm = () => {
    return (
        <form className="register-form">
                    <div className="form-group">
                        <label>Your email</label>
                        <input name="email" type="email" />
                    </div>

                    <div className="form-group">
                        <label>Your Password</label>
                        <input name="password" type="password" />
                    </div>

                    <div className="form-group">
                        <label>Confirm your Password</label>
                        <input name="password" type="password" />
                    </div>

                    <button>Sign Up</button>

        </form>
    );
}

export default RegisterForm;