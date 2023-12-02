import "@/app/(admin)/admin/articles/articlelists.scss";
import Tab from "@/components/Tab/Tab";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import AdminArticles from "@/components/AdminArticles/AdminArticles";
import AdminCategories from "@/components/AdminCategories/AdminCategories";
import { getArticles } from "@/lib/Articles/data";

const BASE_CLASS = "articles";
const ArticleLists = async () => {
  const articles = await getArticles();
  return (
    <>
      <div className={`${BASE_CLASS}`}>
        <div className={`${BASE_CLASS}__container`}>
          <div className={`${BASE_CLASS}__container__right`}>
            <div className={`${BASE_CLASS}__container__right__tabs`}>
              <div className={`${BASE_CLASS}__container__right__tabs-tab`}>
                <Tab text="Articles" isActive={true} />
              </div>
              <div className={`${BASE_CLASS}__container__right__tabs__options`}>
                <div
                  className={`${BASE_CLASS}__container__right__tabs__options-filters`}
                >
                  <span
                    className={`${BASE_CLASS}__container__right__tabs__options-filters-filter`}
                  >
                    Filters
                  </span>

                  <div
                    className={`${BASE_CLASS}__container__right__tabs__options-filters-roles`}
                  >
                    <span className="role">Writer</span>
                    <ChevronDownIcon className="chevron-down" />
                  </div>
                </div>
                <div
                  className={`${BASE_CLASS}__container__right__tabs__options-sort`}
                >
                  <span
                    className={`${BASE_CLASS}__container__right__tabs__options-sort-sortby`}
                  >
                    Sort By
                  </span>

                  <div
                    className={`${BASE_CLASS}__container__right__tabs__options-sort-roles`}
                  >
                    <span className="role">Most Liked</span>
                    <ChevronDownIcon className="chevron-down" />
                  </div>
                </div>
              </div>
            </div>
            <AdminArticles data={articles} />
          </div>
          <div className={`${BASE_CLASS}__container__left`}>
            <div className={`${BASE_CLASS}__container__left__tabs`}>
              <div className={`${BASE_CLASS}__container__left__tabs-tab`}>
                <Tab text="Categories" isActive={true} />
              </div>
            </div>
            <div className={`${BASE_CLASS}__container__left__categories`}>
              <AdminCategories />
              <AdminCategories />
              <AdminCategories />
              <AdminCategories />
              <AdminCategories />
              <AdminCategories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleLists;