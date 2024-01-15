import { getArticle } from "@/lib/Article/data";
import Image from "next/image";
import "@/app/(user)/articles/[id]/article.scss";
import Link from "next/link";
import Avatar from "@/components/Avatar/Avatar";

const BASE_CLASS = "article";

export default async function Page({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);

  return (
    <>
      <div className={BASE_CLASS}>
        <div className={`${BASE_CLASS}__container`}>
          <h1 className={`${BASE_CLASS}__title`}>{article.title}</h1>

          <div className={`${BASE_CLASS}__author`}>
            <div className={`${BASE_CLASS}__author-info`}>
              <div className={`${BASE_CLASS}__author-left`}>
                <Link
                  className={`${BASE_CLASS}__author-link`}
                  href={`/writers/${article.authorId}`}
                >
                  <Avatar className="avatar" img={article.author.avatar} />
                  <p>{article.author.name}</p>
                </Link>
              </div>
            </div>
            <p className={`${BASE_CLASS}__publish-date`}>
              Published on{" "}
              {new Date(article.date_created).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
          </div>

          {article.cover_img && (
            <Image
              src={article.cover_img}
              alt="cover image for article"
              width={2000}
              height={1000}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          )}

          <div className={`${BASE_CLASS}__content`}>
            <div
              dangerouslySetInnerHTML={{
                __html: article.content,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
