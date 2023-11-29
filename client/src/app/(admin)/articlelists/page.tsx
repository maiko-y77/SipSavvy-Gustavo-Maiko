import "@/app/(admin)/articlelists/articlelists.scss";
import Tab from "@/components/Tab/Tab";

const BASE_CLASS = "articles";
const ArticleLists = () => {
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
                    className={`${BASE_CLASS}__container__right__tabs__options-filters-right`}
                  >
                    Filters
                  </span>
                  <span
                    className={`${BASE_CLASS}__container__right__tabs__options-filters-left`}
                  >
                    Writer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleLists;
