import "@/components/AdminArticles/adminArticles.scss";
import { EyeIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { Article } from "@/lib/Article/types";
import Image from "next/image";
import Link from "next/link";

type ArticlesProps = {
  data: Article[];
};

const BASE_CLASS = "articlesItem";

export default async function AdminArticles({ data }: ArticlesProps) {
  return (
    <div className={`${BASE_CLASS}`}>
      {data
        .filter((article) => article.status === "published")
        .map(({ id, title, author, cover_img }) => {
          return (
            <div key={id} className={`${BASE_CLASS}__item`}>
              {cover_img && (
                <Image
                  className={`${BASE_CLASS}__image`}
                  src={cover_img ?? ""}
                  alt="cover image for article"
                  width={64}
                  height={64}
                />
              )}
              <div className={`${BASE_CLASS}__content`}>
                <Link
                  href={`/articles/${id}`}
                  className={`${BASE_CLASS}__content__title`}
                >
                  {title}
                </Link>
                <p className={`${BASE_CLASS}__content__subtitle`}>
                  Written by {author.name}
                </p>
              </div>
              <Link href={`/articles/${id}`} ><EyeIcon className="see-icon" /></Link>
            </div>
          );
        })}
    </div>
  );
}
