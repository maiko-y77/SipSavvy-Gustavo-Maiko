import { Logo } from "../Logo/Logo";
import { AdminLogo } from "../Logo/Logo";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import Link from "next/link";
import "./Navbar.scss";

interface NavbarProps {
  type: "admin" | "writer" | "user" | "default";
}

export default async function Navbar({ type }: NavbarProps) {
  const data = await getServerSession(options);
  const userRole = data?.user.role;

  return (
    <header className={userRole === 'admin' ? "admin-header" : "header"}>
      {userRole === "admin" ? <AdminLogo /> : <Logo />}
      {data ? <LogoutBtn /> : <Link href="/login">Login</Link>}
    </header>
  );
}
