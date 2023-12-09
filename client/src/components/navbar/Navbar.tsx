"use client"
import { Logo } from "../Logo/Logo";
import { AdminLogo } from "../Logo/Logo";
// import { getServerSession } from "next-auth";
// import { options } from "@/app/api/auth/[...nextauth]/options";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import Link from "next/link";
import "./Navbar.scss";
import Image from "next/image";
import AdminOptions from "../AdminOptions/AdminOptions";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { data }  = useSession();
  const { name, avatar, role } = data?.user || {}

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <header className={role === "admin" ? "header admin-header" : "header"}>
      {role === "admin" ? <AdminLogo /> : <Logo />}

      <nav className={`default_navbar ${isNavbarOpen ? "open" : ""} mobile-nav`}>
        <div className="links">
        {role === "admin" && <AdminOptions />}
        <Link href={data ? "/feed" : "/"} onClick={closeNavbar}>Home</Link>
        {role === "writer" && (
          <>
            <Link href={`/editor/new`} onClick={closeNavbar}>Write</Link>
            <Link href={`/writers/${data?.user.id}`} onClick={closeNavbar}>My Profile</Link>
            <Link href="/my-articles" onClick={closeNavbar}>My Articles</Link>
          </>
        )}
        <Link href="/about" onClick={closeNavbar}>About Us</Link>
        {role !== "admin" && <Link href="/contact" onClick={closeNavbar}>Contact Us</Link>}
        </div>
        <div className="wrap-icons">
          {data ? (
            <div className="droppeddown-loggedin">
              <Image
                className="avatar icon"
                src={`${avatar}`}
                width={24}
                height={24}
                alt={name + `'s Picture`}
              />
              <p>
                Hello, <span>{name}</span>!
              </p>
            </div>
          ) : (
            ""
          )}
          {data ? (
            <LogoutBtn />
          ) : (
            <>
              <Link href="/login" onClick={closeNavbar}>Login</Link>
              <Link href="/register" className="primary-btn" onClick={closeNavbar}>
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      <Link href="" className="burger" onClick={toggleNavbar}>
        <Bars3Icon width={36} height={24} />
      </Link>

    </header>
  );
}
