"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const AdminUserFilter = () => {
  const searchParams = useSearchParams();
  const searchRole = searchParams.get('role');
  return (
    <ul className="filters">
      <li className={!searchRole && "active"}>
        <Link href="/admin/users">All</Link>
      </li>
      <span>&nbsp;|&nbsp;</span>
      <li className={searchRole === 'writer' && "active"}>
        <Link href="?role=writer">Writers</Link>
      </li>
      <span>&nbsp;|&nbsp;</span>
      <li className={searchRole === 'user' && "active"}>
        <Link href="?role=user">Readers</Link>
      </li>
      <span>&nbsp;|&nbsp;</span>
      <li className={searchRole === 'admin' && "active"}>
        <Link href="?role=admin">Admin</Link>
      </li>
    </ul>
  );
};

export default AdminUserFilter;
