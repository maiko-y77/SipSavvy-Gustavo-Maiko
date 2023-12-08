import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import { getArticle } from "@/lib/Article/data";
import Articles from "@/components/Articles/Articles";
import { Article } from "@/lib/Article/types";
import Image from "next/image";
import "@/app/(user)/articles/[id]/article.scss";
import Link from "next/link";
import { FollowButton } from "@/components/FollowButton/FollowButton";
import Avatar from "@/components/Avatar/Avatar";

const BASE_CLASS = "article";

export default async function Page({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);
  // TODO: find a way to fetch personalized recoommended articles
  const recommendedArticles: Article[] = [];

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

                <FollowButton />
              </div>

              <div className={`${BASE_CLASS}__author-right`}>
                <div className={`${BASE_CLASS}__author__heart`}>
                  <HeartIcon width={24} height={24} />
                  <div className="element">650 likes</div>
                </div>

                <BookmarkIcon width={24} height={24} />
              </div>
            </div>
            <p className={`${BASE_CLASS}__publish-date`}>
              Published on {new Date(article.date_created).toLocaleString()}
            </p>
          </div>

          {article.cover_img && (
            <Image
              src={article.cover_img}
              alt="cover image for article"
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          )}

          <div className={`${BASE_CLASS}__content`}>
            <p dangerouslySetInnerHTML={{
                  __html: article.content
                }}></p>
          </div>

          <div className={`${BASE_CLASS}__author`}>
            <div className={`${BASE_CLASS}__author-info`}>
              <div className={`${BASE_CLASS}__author-left`}>
                <Link className={`${BASE_CLASS}__author-link`} href="/">
                  <Avatar className="avatar" img={article.author.avatar} />
                  <p>{article.author.name}</p>
                </Link>

                <FollowButton />
              </div>

              <div className={`${BASE_CLASS}__author-right`}>
                <div className={`${BASE_CLASS}__author__heart`}>
                  <HeartIcon width={24} height={24} />
                  <div className="element">650 likes</div>
                </div>

                <BookmarkIcon width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
        <Articles data={recommendedArticles} />
      </div>
    </>
  );
}
