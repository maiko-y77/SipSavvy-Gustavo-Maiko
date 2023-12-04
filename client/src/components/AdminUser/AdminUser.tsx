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
        
          <div key={id} className={`${BASE_CLASS}__item`}>

            <div className={`${BASE_CLASS}__item__content`}>

              <Link className="avatar icon" href={`/writers/${id}`} target="_blank">
                <Avatar className="avatar" img={String(avatar)} />
              </Link>

              <input value={name} type='text' className={`${BASE_CLASS}__item__content__name`} contentEditable={true} />

              <span className={`${BASE_CLASS}__item__content__lastname`}>
                {last_name}
              </span>

              <span className={`${BASE_CLASS}__item__content__email`}>{email}</span>

            </div>

            <div className={`${BASE_CLASS}__item__actions`}>
              <SelectUserRole user={{ id, role }} />
              <TrashIcon width={24} height={24} className="ellipsis" />
            </div>

          </div>

      ))}
    </div>
  );
}
