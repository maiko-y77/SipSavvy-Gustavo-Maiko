import "@/components/AdminNewuser/adminNewuser.scss";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const BASE_CLASS = "user";

const AdminNewuser = () => {
  return (
    <div className={`${BASE_CLASS}`}>
      <Link className="avatar icon" href="/">
        <UserIcon width={48} height={48} />
      </Link>
      <p className={`${BASE_CLASS}__name`}>John Doe</p>
    </div>
  );
};

export default AdminNewuser;
