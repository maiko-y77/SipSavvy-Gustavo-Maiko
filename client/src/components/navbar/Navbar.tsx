import { Logo } from "../Logo/Logo";
import { AdminLogo } from "../Logo/Logo";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import Link from "next/link";
import "./Navbar.scss";
import Image from "next/image";

export default async function Navbar() {
  const data = await getServerSession(options);
  const userRole = data?.user.role;

  const userLinks = {
    admin: [
      { text: "Dashboard", destination: "admin/dashboard" },
      { text: "Feed", destination: "/feed" },
      { text: "Users", destination: "/admin/users" },
      { text: "Articles", destination: "/admin/articles" },
      { text: "My Collections", destination: "/my-collections" },
    ],
    writer: [
      { text: "Home", destination: "/feed" },
      { text: "My Articles", destination: "/my-articles" },
      { text: "My Profile", destination: `/writer/${data?.user.id}` },
      { text: "Collections", destination: "/my-collections" },
      { text: "Contact Us", destination: "/contact" },
    ],
    user: [
      { text: "Home", destination: "/feed" },
      { text: "My Collections", destination: "/my-collections" },
      { text: "Contact Us", destination: "/contact" },
    ],
  };

  return (
    <header className={userRole === "admin" ? "admin-header" : "header"}>
      {userRole === "admin" ? <AdminLogo /> : <Logo />}
      <nav className="default_navbar">
        {userRole === "admin"
          ? userLinks.admin.map((item) => (
              <Link key={item.destination} href={item.destination}>
                {item.text}
              </Link>
            ))
          : userLinks.user.map((item) => (
              <Link key={item.destination} href={item.destination}>
                {item.text}
              </Link>
            ))}
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

      {data ? <LogoutBtn /> : <Link href="/login">Login</Link>}
    </header>
  );
}
