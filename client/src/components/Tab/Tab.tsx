"use client";
import { usePathname } from "next/navigation";

const Tab = ({ text, path }: { text: string; path: string }) => {
  const pathname = usePathname();
  return <div className={`tab ${pathname === path ? "active" : ""}`}>{text}</div>;
};

export default Tab;
