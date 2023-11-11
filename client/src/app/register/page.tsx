//SIGN UP PAGE
import './register.scss'
import RegisterForm from "@/components/RegisterForm/RegisterForm";

export default function Register() {
    return (
        <div className="register-content">

            <h1>Come learn and share with the hippest wine community around!</h1>
            <p>Enter your email address and password to create an account.</p>
            <RegisterForm /> 

        </div>
    )
}