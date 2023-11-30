import Avatar from "../Avatar/Avatar";
import "@/components/AdminUser/adminUser.scss";
import Link from "next/link";
import {
  ChevronDownIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { User } from "@/lib/User/types";

type USersProps = {
  data: User[];
};

const BASE_CLASS = "user";

export default async function AdminUser({ data }: USersProps) {
  return (
    <div className={`${BASE_CLASS}`}>
      {data.map(({ id, avatar, name, last_name, email }) => (
        <div key={id}>
          <div className={`${BASE_CLASS}__item`}>
            <div className={`${BASE_CLASS}__content`}>
              <Link className="avatar icon" href="/">
                <Avatar className="avatar" img={String(avatar)} />
              </Link>
              <span className={`${BASE_CLASS}__content__name`}>{name}</span>
              <span className={`${BASE_CLASS}__content__lastname`}>
                {last_name}
              </span>
              <span className={`${BASE_CLASS}__content__email`}>{email}</span>
            </div>
            <div className={`${BASE_CLASS}__actions`}>
              <div className={`${BASE_CLASS}__actions__roles`}>
                <span className="role">Writer</span>
                <ChevronDownIcon className="chevron-down" />
              </div>
              <EllipsisHorizontalIcon className="ellipsis" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
