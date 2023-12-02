import "@/components/AdminArticles/adminArticles.scss";
import { EyeIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { Article } from "@/lib/Article/types";
import Image from "next/image";


type ArticlesProps = {
  data: Article[];
};

const BASE_CLASS = "articles";

export default async function AdminArticles({ data }: ArticlesProps) {
  return (
    <div className={`${BASE_CLASS}`}>
      {data.map(({ id, title, author, cover_img }) => {
        return (
          <div key={id}>
            <div className={`${BASE_CLASS}__item`}>
              {/* <div className={`${BASE_CLASS}__image`}> */}
              {cover_img && (
                <Image
                  className={`${BASE_CLASS}__image`}
                  src={cover_img ?? ""}
                  alt="cover image for article"
                  width={64} height={64}
                />
              )}
              {/* </div> */}
              <div className={`${BASE_CLASS}__content`}>
                <p className={`${BASE_CLASS}__content__title`}>
                  {title}
                </p>
                <p className={`${BASE_CLASS}__content__subtitle`}>
                  Written by Author name • 650 Likes
                </p>
              </div>
              <EyeIcon className="see-icon" />
              <EllipsisHorizontalIcon className="ellipsis" />
            </div>
          </div>
        )
      })}
    </div>
  );
};