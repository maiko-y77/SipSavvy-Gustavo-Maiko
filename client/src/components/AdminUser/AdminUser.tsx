"use client"
import Avatar from "../Avatar/Avatar";
import "@/components/AdminUser/adminUser.scss";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { User } from "@/lib/User/types";
import SelectUserRole from "../SelectUserRole/SelectUserRole";
import UserNameFormField from "./UserNameFormField/UserNameFormField";
import UserLastNameFormField from "./UserLastNameFormField/UserLastNameFormField";
import UserEmailFormField from "./UserEmailFormField/UserEmailFormField";
import { useSearchParams } from 'next/navigation'

type USersProps = {
  data: User[];
};

const BASE_CLASS = "user";

export default function AdminUser({ data }: USersProps) {

  const searchParams = useSearchParams()
  const searchRole = searchParams.get('role')

  const filteredUsers = data.filter(user => {
    return !searchRole || user.role === searchRole;
  });

  return (
    <div className={`${BASE_CLASS}`}>
      {filteredUsers.map(({ id, avatar, name, last_name, email, role }) => (
        
          <div key={id} className={`${BASE_CLASS}__item`}>

            <div className={`${BASE_CLASS}__item__content`}>

              <Link className="avatar icon" href={`/writers/${id}`} target="_blank">
                <Avatar className="avatar" img={String(avatar)} />
              </Link>


              <UserNameFormField user={ { id, name } } />
              <UserLastNameFormField user={ { id, last_name } } />
              <UserEmailFormField user={ { id, email } } />

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
