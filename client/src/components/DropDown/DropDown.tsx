"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import styles from "@/components/DropDown/dropDown.module.scss";
import { useState } from "react";
import Link from "next/link";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        Writer
        {!isOpen ? (
          <ChevronDownIcon width={24} height={24} />
        ) : (
          <ChevronUpIcon width={24} height={24} />
        )}
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <Link href="/admin/dashboard">Reader</Link>
          <Link href="/admin/users">Admin</Link>
        </div>
      )}
    </div>
  );
};

export default DropDown;
