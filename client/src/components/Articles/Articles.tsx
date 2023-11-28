import { BookmarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import "./articles.scss";
import { Article } from "@/lib/Article/types";
import "@/components/Articles/articles.scss"
import Avatar from "../Avatar/Avatar";

type ArticlesProps = {
  data: Article[];
};

export default async function Articles({ data }: ArticlesProps) {
  return (
    <div className="article-item">
      {data.map(({ id, title, content, author }) => (
        <div key={id}>
          <div className="article-content">
            <div className="author-bullet">
              <Avatar className="avatar" img={author.avatar} />
              <p className="author-name">{author.name}</p>
            </div>
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
