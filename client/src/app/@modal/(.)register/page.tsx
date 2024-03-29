import Modal from "@/components/Modal/Modal";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import "../../register/register.scss";
const page = () => {
  return (
    <Modal>
      <div className="register-content">
        <h1>Come learn and share with the hippest wine community around!</h1>
        <p>Enter your email address and password to create an account.</p>
        <RegisterForm />
      </div>
    </Modal>
  );
};

export default page;
