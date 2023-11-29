import "@/components/AdminRequests/adminRequests.scss";
import {
  UserIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const BASE_CLASS = "requests";

const AdminRequests = () => {
  return (
    <div className={`${BASE_CLASS}`}>
      <div className={`${BASE_CLASS}__content`}>
        <Link className="avatar icon" href="/">
          <UserIcon width={48} height={48} />
        </Link>
        <div className={`${BASE_CLASS}__content__info`}>
          <p className={`${BASE_CLASS}__content__info__author`}>John Doe</p>
          <p className={`${BASE_CLASS}__content__info__comment`}>
            The comment comes here
          </p>
        </div>
      </div>
      <div className={`${BASE_CLASS}__cta`}>
        <button className={`${BASE_CLASS}__cta__button`}>
          <CheckCircleIcon width={24} height={24} />
          <span className="text">Approve</span>
        </button>
        <button className={`${BASE_CLASS}__cta__secondly-button`}>
          <XCircleIcon width={18} height={18} />
          <span className="text">Reject</span>
        </button>
      </div>
    </div>
  );
};

export default AdminRequests;
