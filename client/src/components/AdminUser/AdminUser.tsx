import Avatar from "../Avatar/Avatar";
import "@/components/AdminUser/adminUser.scss";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { User } from "@/lib/User/types";
import SelectUserRole from "../SelectUserRole/SelectUserRole";

type USersProps = {
  data: User[];
};

const BASE_CLASS = "user";

export default async function AdminUser({ data }: USersProps) {
  return (
    <div className={`${BASE_CLASS}`}>
      {data.map(({ id, avatar, name, last_name, email, role }) => (
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
                <SelectUserRole user={ {id , role}} />
              </div>
              <TrashIcon width={24} height={24} className="ellipsis" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
