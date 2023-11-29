import "@/components/AdiminUser/adminUser.scss";
import Link from "next/link";
import {
  UserIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const BASE_CLASS = "user";
const AdminUser = () => {
  return (
    <div className={`${BASE_CLASS}`}>
      <div className={`${BASE_CLASS}__content`}>
        <Link className="avatar icon" href="/">
          <UserIcon width={48} height={48} />
        </Link>
        <span className={`${BASE_CLASS}__content__name`}>John</span>
        <span className={`${BASE_CLASS}__content__lastname`}>Doe</span>
        <span className={`${BASE_CLASS}__content__email`}>test@email.com</span>
      </div>
      <div className={`${BASE_CLASS}__actions`}>
        <div className={`${BASE_CLASS}__actions__roles`}>
          <span className="role">Writer</span>
          <ChevronDownIcon className="chevron-down" />
        </div>
        <EllipsisHorizontalIcon className="ellipsis" />
      </div>
    </div>
  );
};

export default AdminUser;
