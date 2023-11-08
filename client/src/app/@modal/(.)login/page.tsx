"use client"
import LoginForm from "@/components/LoginForm";
import Modal from "@/components/Modal"
import { usePathname } from "next/navigation";

const page = () => {
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