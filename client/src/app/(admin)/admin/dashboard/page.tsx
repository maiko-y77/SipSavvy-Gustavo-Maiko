import "@/app/(admin)/admin/dashboard/dashboard.scss";
import Tab from "@/components/Tab/Tab";
import Link from "next/link";
import AdminArticles from "@/components/AdminArticles/AdminArticles";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import AdminRequests from "@/components/AdminRequests/AdminRequests";
import AdminNewuser from "@/components/AdminNewuser/AdminNewuser";

const BASE_CLASS = "dashbord";

const Dashbord = () => {
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
                <Link className="link" href="#">
                  See All
                </Link>
              </div>
            </div>
            <AdminArticles />
            <AdminArticles />
            <AdminArticles />
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
            <AdminArticles />
            <div className={`${BASE_CLASS}__container__right__comment`}>
              <ChatBubbleOvalLeftEllipsisIcon
                className={`${BASE_CLASS}__container__right__comment__chat-icon`}
              />
              <div
                className={`${BASE_CLASS}__container__right__comment__content`}
              >
                <Link className="avatar icon" href="/">
                  <UserIcon width={36} height={36} />
                </Link>
                <div
                  className={`${BASE_CLASS}__container__right__comment__content__info`}
                >
                  <p
                    className={`${BASE_CLASS}__container__right__comment__content__info__author`}
                  >
                    John Doe
                  </p>
                  <p
                    className={`${BASE_CLASS}__container__right__comment__content__info__comment`}
                  >
                    The comment comes here
                  </p>
                </div>
              </div>
              <TrashIcon
                className={`${BASE_CLASS}__container__right__comment__trash-icon`}
              />
            </div>
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
                <Link className="link" href="#">
                  See All
                </Link>
              </div>
            </div>
            <div className={`${BASE_CLASS}__container__left__newuser`}>
              <AdminNewuser />
              <AdminNewuser />
              <AdminNewuser />
              <AdminNewuser />
              <AdminNewuser />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
