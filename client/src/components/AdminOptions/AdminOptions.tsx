"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import styles from "./AdminOptions.module.scss";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const AdminOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const adminOptionsRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (adminOptionsRef.current && !adminOptionsRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
  <div className={styles.container} ref={adminOptionsRef}>
        <div className={styles.button} onClick={()=> setIsOpen(!isOpen)}>
            Admin
            {!isOpen ? <ChevronDownIcon width={24} height={24}/> : <ChevronUpIcon width={24} height={24}/>}
        </div>
        {isOpen &&
        <div className={styles.dropdown}>
           <Link href="/admin/dashboard" onClick={()=> setIsOpen(!isOpen)}>Dashboard</Link>
           <Link onClick={()=> setIsOpen(!isOpen)} href="/admin/users">Users</Link>
           <Link onClick={()=> setIsOpen(!isOpen)} href="/admin/articles">Articles</Link>
        </div>
        }
  </div>
  )
};

export default AdminOptions;
