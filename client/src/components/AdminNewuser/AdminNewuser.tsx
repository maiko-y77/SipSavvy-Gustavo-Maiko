import "@/components/AdminNewuser/adminNewuser.scss";
import Link from "next/link";
import { User } from "@/lib/User/types";
import Avatar from "../Avatar/Avatar";

type USersProps = {
  data: User[];
};

const BASE_CLASS = "new-user";

export default async function AdminNewuser({ data }: USersProps) {
  return (
    <>
      {data.map(({ id, avatar, name, last_name }) => (
        <div key={id}>
          <div className={`${BASE_CLASS}`}>
            <Link className="avatar icon" href="/">
              <Avatar className="avatar" img={String(avatar)} />
            </Link>
            <div className={`${BASE_CLASS}__name`}>
              <p className="name">
                {name} {last_name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
