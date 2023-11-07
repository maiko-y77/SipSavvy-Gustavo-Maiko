"use client";
import Link from "next/link";

export default function DefaultNavbar() {
  const location = window.location.pathname;
  return (
    <nav className="default_navbar">
      <Link href="/about">About Us</Link>
      <Link href="/contact">Contact Us</Link>
      {location === "/login" ? "" : <Link href="/login">Sign In</Link>}
      {location === "/register" ? (
        ""
      ) : (
        <div>
          <Link href="/register">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}