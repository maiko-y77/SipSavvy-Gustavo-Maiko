"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import styles from "./AdminOptions.module.scss";
import { useState } from "react";
import Link from "next/link";

const AdminOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <div className={styles.container}>
        <div className={styles.button} onClick={()=> setIsOpen(!isOpen)}>
            Admin
            {!isOpen ? <ChevronDownIcon width={24} height={24}/> : <ChevronUpIcon width={24} height={24}/>}
        </div>
        {isOpen &&
        <div className={styles.dropdown}>
           <Link href="/admin/dashboard">Dashboard</Link>
           <Link href="/admin/users">Users</Link>
           <Link href="/admin/articles">Articles</Link>
        </div>
        }
  </div>
  )
};

export default AdminOptions;
