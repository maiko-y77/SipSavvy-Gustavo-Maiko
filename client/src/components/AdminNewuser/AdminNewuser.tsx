import "@/components/AdminNewuser/adminNewuser.scss";
import Link from "next/link";
import { User } from "@/lib/User/types";
import Avatar from "../Avatar/Avatar";

type UsersProps = {
  data: User[];
};

const BASE_CLASS = "new-user";

export default async function AdminNewuser({ data }: UsersProps) {
  return (
    <>
      {data.slice(0, 10).map(({ id, avatar, name, last_name }) => (
        <div className={`${BASE_CLASS}`} key={id}>
          <Link className="avatar icon" href="/">
            <Avatar className="avatar" img={String(avatar)} />
          </Link>
          <div className={`${BASE_CLASS}__name`}>
            <Link href="/admin/users/" className="name">
              {name} {last_name}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
