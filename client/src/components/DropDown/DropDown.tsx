"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import "@/components/DropDown/dropDown.scss";
import { useState } from "react";
import Link from "next/link";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <div className="button" onClick={() => setIsOpen(!isOpen)}>
        Writer
        {!isOpen ? (
          <ChevronDownIcon width={24} height={24} />
        ) : (
          <ChevronUpIcon width={24} height={24} />
        )}
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <Link href="#">Reader</Link>
          <Link href="#">Admin</Link>
        </div>
      )}
    </div>
  );
};

export default DropDown;
