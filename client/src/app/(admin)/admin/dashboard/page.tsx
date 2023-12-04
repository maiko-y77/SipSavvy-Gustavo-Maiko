import "@/app/(admin)/admin/dashboard/dashboard.scss";
import Tab from "@/components/Tab/Tab";
import Link from "next/link";
import AdminArticles from "@/components/AdminArticles/AdminArticles";
import AdminRequests from "@/components/AdminRequests/AdminRequests";
import AdminNewuser from "@/components/AdminNewuser/AdminNewuser";
import { getArticles } from "@/lib/Articles/data";
import AdminRecentComments from "@/components/AdminRecentComments/AdminRecentComments";
import { getUsers } from "@/lib/Users/data"; // import the function to get users data

const BASE_CLASS = "dashboard";

const Dashboard = async () => {
  const articles = await getArticles();
  const users = await getUsers(); // get the users data

  return (
    <>
      <div className={`${BASE_CLASS}`}>
        <div className={`${BASE_CLASS}__container`}>
          <div className={`${BASE_CLASS}__container__right`}>
            <div className={`${BASE_CLASS}__container__right__tabs`}>
              <div className={`${BASE_CLASS}__container__right__tabs-tab`}>
                <Tab text="Recent Articles" isActive={true} />
              </div>
              <div className={`${BASE_CLASS}__container__right__tabs-link`}>
                <Link className="link" href={"/admin/articles"}>
                  See All
                </Link>
              </div>
            </div>
            <AdminArticles data={articles} />
            {/* <AdminArticles data={articles} />
            <AdminArticles data={articles} /> */}
            <div className={`${BASE_CLASS}__container__right__tabs`}>
              <div className={`${BASE_CLASS}__container__right__tabs-tab`}>
                <Tab text="Recent Comments" isActive={true} />
              </div>
              <div className={`${BASE_CLASS}__container__right__tabs-link`}>
                <Link className="link" href="#">
                  See All
                </Link>
              </div>
            </div>
            <AdminArticles data={articles} />
            <AdminRecentComments />
          </div>
          <div className={`${BASE_CLASS}__container__left`}>
            <div className={`${BASE_CLASS}__container__left__tabs`}>
              <div className={`${BASE_CLASS}__container__left__tabs-tab`}>
                <Tab text="Pending Requests" isActive={true} />
              </div>
              <div className={`${BASE_CLASS}__container__left__tabs-link`}>
                <Link className="link" href="#">
                  See All
                </Link>
              </div>
            </div>
            <AdminRequests />
            <AdminRequests />
            <div className={`${BASE_CLASS}__container__left__tabs`}>
              <div className={`${BASE_CLASS}__container__left__tabs-tab`}>
                <Tab text="New Users" isActive={true} />
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
