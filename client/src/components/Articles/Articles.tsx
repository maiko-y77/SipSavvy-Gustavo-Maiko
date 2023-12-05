import { BookmarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import "./articles.scss";
import { Article } from "@/lib/Article/types";
import "@/components/Articles/articles.scss";
import Avatar from "../Avatar/Avatar";
import Image from "next/image";

interface ArticlesProps {
  data: {
    id: string;
    title: string;
    content: string;
    coverImg?: string;
    author: {
      name: string;
      avatar?: string;
    };
  }[];
}

const Articles: React.FC<ArticlesProps> = ({ data }) => {
  return (
    <div className="article-item">
      {data.map((article) => (
        <>
          <div className="article-content" key={article.id}>
            <div className="author-bullet">
              <Avatar className="avatar" img={article.author.avatar} />
              <p className="author-name">{article.author.name}</p>
            </div>
            <h3 className="article-title">
              <Link href={`/articles/${article.id}`}>{article.title}</Link>
            </h3>
            <p>{article.content}</p>
            <div className="action-bar">
              <Link href={`/articles/${article.id}`}>
                Continue Reading <ArrowLongRightIcon width={24} height={24} />
              </Link>
              <Link href="#" className="icon-link">
                <BookmarkIcon width={24} height={24} /> Save for later
              </Link>
            </div>
          </div>
          {article.coverImg && (
            <Link href={`/articles/${article.id}`}>
              <Image
                src={article.coverImg ?? ""}
                width={200}
                height={200}
                alt={article.title}
                className="article-image"
              />
            </Link>
          )}
        </>
      ))}
    </div>
  );
};

export default Articles;
