import "@/components/AdminArticles/adminArticles.scss";
import { EyeIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const BASE_CLASS = "articles";

const AdminArticles = () => {
  return (
    <div className={`${BASE_CLASS}`}>
      <div className={`${BASE_CLASS}__image`}></div>
      <div className={`${BASE_CLASS}__content`}>
        <p className={`${BASE_CLASS}__content__title`}>
          What Does 5,000-Year-Old Wine Taste Like?
        </p>
        <p className={`${BASE_CLASS}__content__subtitle`}>
          Written by Author Name • 650 Likes
        </p>
      </div>
      <EyeIcon className="see-icon" />
      <EllipsisHorizontalIcon className="ellipsis" />
    </div>
  );
};

export default AdminArticles;
