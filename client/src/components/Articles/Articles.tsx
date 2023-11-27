import { BookmarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import "./articles.scss";
import AuthorBullet from "../AuthorBullet/AuthorBullet";
import { getArticles } from "../../lib/Articles/data";
import { Article } from "@/lib/Article/types";
import "@/components/Articles/articles.scss"

type ArticlesProps = {
  data: Article[];
};

export default async function Articles({ data }: ArticlesProps) {
  return (
    <div className="article-item">
      {data.map(({ id, title, content, author }) => (
        <div key={id}>
          <div className="article-content">
            <AuthorBullet name={author.name} avatar={author.avatar} />
            <h3 className="article-title">
              <Link href={`/articles/${id}`}>{title}</Link>
            </h3>
            <p>{content}</p>
            <div className="action-bar">
              <Link href="#">
                Continue Reading <ArrowLongRightIcon width={24} height={24} />
              </Link>
              <Link href="#" className="icon-link">
                <BookmarkIcon width={24} height={24} /> Save for later
              </Link>
            </div>
          </div>
          <div className="article-image"></div>
        </div>
      ))}
    </div>
  );
}
