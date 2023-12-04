import "@/components/AdminRecentComments/adminRecentComments.scss";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const BASE_CLASS = "comment";

const AdminRecentComments = () => {
  return (
    <div className={`${BASE_CLASS}`}>
      <ChatBubbleOvalLeftEllipsisIcon className={`${BASE_CLASS}__chat-icon`} />
      <div className={`${BASE_CLASS}__content`}>
        <Link className="avatar icon" href="/">
          <UserIcon width={36} height={36} />
        </Link>
        <div className={`${BASE_CLASS}__content__info`}>
          <p className={`${BASE_CLASS}__content__info__author`}>John Doe</p>
          <p className={`${BASE_CLASS}__content__info__comment`}>
            The comment comes here
          </p>
        </div>
      </div>
      <TrashIcon className={`${BASE_CLASS}__trash-icon`} />
    </div>
  );
};

export default AdminRecentComments;
