//SIGN UP PAGE

export default function Register() {
    return (
        <>
            <div className="register-content">

                <h1>Come learn and share with the hippest wine community around!</h1>
                <p>Enter your email address and password to create an account.</p>

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

            </div>
        </>
    )
}