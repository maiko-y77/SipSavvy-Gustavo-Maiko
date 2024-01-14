import "./Header.scss";
import { Logo, AdminLogo } from "../Logo/Logo";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Navbar from "../Navbar/Navbar";
import { Bars2Icon } from "@heroicons/react/24/outline";

export default async function Header() {

  const data = await getServerSession(options)
  const userRole = data?.user.role

  return (
    <header className={userRole === "admin" ? "admin-header" : "header"}>
      <div className="logo">
        {userRole === "admin" ? <AdminLogo /> : <Logo />}
      </div>

      <Navbar />

      <div className="burger">
        <Bars2Icon width={24} height={24} />
      </div>

    </header>
  );
}
