import { Logo } from "../Logo/Logo";
import { AdminLogo } from "../Logo/Logo";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import Link from "next/link";
import "./Navbar.scss";
import Image from "next/image";
import AdminOptions from "../AdminOptions/AdminOptions";

export default async function Navbar() {
  const data = await getServerSession(options);
  const userRole = data?.user.role;

  return (
    <header className={userRole === "admin" ? "admin-header" : "header"}>
      {userRole === "admin" ? <AdminLogo /> : <Logo />}

      <nav className="default_navbar">
        {userRole === "admin" && <AdminOptions /> }
        <Link href={data ? "/feed" : "/"}>Home</Link>
        {userRole === "writer" && (
          <>
          <Link href={`/editor/new`}>Write</Link>
          <Link href={`/writers/${data?.user.id}`}>My Profile</Link>
          <Link href="/my-articles">My Articles</Link>
          </>
        )}
        {data && <Link href="/my-collections">My Collections</Link>}
        <Link href="/about">About Us</Link>
        {userRole !== "admin" && <Link href="/contact" >Contact Us</Link>}
      </nav>
      <div className="wrap-icons">
        {data ? (
          <div className="droppeddown-loggedin">
            <Image
              className="avatar icon"
              src={data?.user.avatar}
              width={24}
              height={24}
              alt={data?.user.avatar + `'s Avatar`}
            />
            <p>
              Hello, <span>{data?.user.name}</span>!
            </p>
          </div>
        ) : (
          ""
        )}
      </div>

      {data ? <LogoutBtn /> : (
      <>
        <Link href="/login">Login</Link>
        <Link href="/register" className="primary-btn">Register</Link>
      </>
      )}
    </header>
  );
}
