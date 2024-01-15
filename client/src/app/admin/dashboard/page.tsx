import "./dashboard.scss";
import Tab from "../../../components/Tab/Tab";
import Link from "next/link";
import AdminArticles from "../../../components/AdminArticles/AdminArticles";
import AdminNewuser from "../../../components/AdminNewuser/AdminNewuser";
import { getArticles } from "@/lib/Articles/data";
import { getUsers } from "@/lib/Users/data"; // import the function to get users data

const BASE_CLASS = "dashboard";

const Dashboard = async () => {
  const allArticles = await getArticles();
  const articles = allArticles.slice(0, 9);

  const users = await getUsers();

  return (
    <>
      <div className={`${BASE_CLASS}`}>
        <div className={`${BASE_CLASS}__container`}>
          <div className={`${BASE_CLASS}__container__right`}>
            <div className={`${BASE_CLASS}__container__right__tabs`}>
              <div className={`${BASE_CLASS}__container__right__tabs-tab`}>
                <Tab text="Recent Articles" path="" />
              </div>
              <div className={`${BASE_CLASS}__container__right__tabs-link`}>
                <Link className="link" href={"/admin/articles"}>
                  See All
                </Link>
              </div>
            </div>
            <AdminArticles data={articles} />
          </div>

          <div className={`${BASE_CLASS}__container__left`}>
            <div className={`${BASE_CLASS}__container__left__tabs`}>
              <div className={`${BASE_CLASS}__container__left__tabs-tab`}>
                <Tab text="New Users" path="" />
              </div>

              <div className={`${BASE_CLASS}__container__left__tabs-link`}>
                <Link className="link" href={"/admin/users"}>
                  See All
                </Link>
              </div>
            </div>

            <div className={`${BASE_CLASS}__container__left__newuser`}>
              <AdminNewuser data={users} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
