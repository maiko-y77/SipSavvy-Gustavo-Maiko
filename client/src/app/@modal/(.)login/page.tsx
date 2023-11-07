"use client"
import LoginForm from "@/components/LoginForm";
import Modal from "@/components/Modal"

const page = () => {

    const router = window.location.pathname;

    return (
        <Modal>
        <div className="login-content">
        <h1>Unlock a world of wine knowledge.</h1>
        <p>Sign in to explore, learn, and savor with our vibrant wine community.</p>

        <LoginForm />
      </div>
        </Modal>
    );
}

export default page;

// currentRoute 