import Link from "next/link";

export default function DefaultNavbar() {
    return (
        <nav className="default_navbar">
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/login">Sign In</Link>
            <div>
                <Link href="/register">Sign Up</Link>
            </div>
        </nav>
    )
}