import Tab from "@/components/Tab/Tab";
import Link from "next/link";
import "@/app/(admin)/users/users.scss";
import AdminUser from "@/components/AdiminUser/AdminUser";

const BASE_CLASS = "users";

const Users = () => {
  return (
    <>
      <div className={`${BASE_CLASS}`}>
        <div className={`${BASE_CLASS}__container`}>
          <div className={`${BASE_CLASS}__container__tabs`}>
            <div className={`${BASE_CLASS}__container__tabs-tab`}>
              <Tab text="Users" isActive={true} />
            </div>
            <div className={`${BASE_CLASS}__container__tabs-link`}>
              <div className="filter">
                <Link className="filter" href="#">
                  Filters
                </Link>
              </div>
              <div className="filters">
                <div className="filters__all">
                  <Tab text="All" isActive={true} />
                </div>
                <span>|</span>
                <Link className="writers" href="#">
                  Writers
                </Link>
                <span>|</span>
                <Link className="readers" href="#">
                  Readers
                </Link>
              </div>
            </div>
          </div>
          <AdminUser />
          <AdminUser />
          <AdminUser />
          <AdminUser />
        </div>
      </div>
    </>
  );
};

export default Users;
