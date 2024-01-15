import Tab from "../../../components/Tab/Tab";
import "./users.scss";
import { getUsers } from "@/lib/Users/data";
import AdminUser from "../../../components/AdminUser/AdminUser";
import AdminUserFilter from "../../../components/AdminUserFilter/AdminUserFilter";

const BASE_CLASS = "users";

const page = async () => {
  const users = await getUsers();
  return (
    <>
      <div className={`${BASE_CLASS}`}>
        <div className={`${BASE_CLASS}__container`}>
          <div className={`${BASE_CLASS}__container__tabs`}>
            <div className={`${BASE_CLASS}__container__tabs-tab`}>
              <Tab text="Users" path={""} />
            </div>
            <div className={`${BASE_CLASS}__container__tabs-link`}>
              <div className="filter">
                <p className="filter">Filters</p>
              </div>
              <AdminUserFilter />
            </div>
          </div>
          <AdminUser data={users} />
        </div>
      </div>
    </>
  );
};

export default page;
