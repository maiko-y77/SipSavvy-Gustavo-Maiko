"use client";
import { signOut } from "next-auth/react";
import { PowerIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const LoginLogoutBtn = () => {
  return (
    <Link href="" onClick={()=>signOut({ callbackUrl: '/' })}>
      <PowerIcon width={22} height={22} />
    </Link>
  );
};

export default LoginLogoutBtn;
