import { BookmarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import "./articles.scss";
import { Article } from "@/lib/Article/types";
import "@/components/Articles/articles.scss";
import Avatar from "../Avatar/Avatar";
import Image from "next/image";
import DOMPurify from "dompurify";

interface ArticlesProps {
  data: {
    id: string;
    title: string;
    content: string;
    cover_img?: string;
    status: string;
    author: {
      name: string;
      avatar?: string;
    };
  }[];
}

const Articles: React.FC<ArticlesProps> = ({ data }) => {

  const filteredData: [] = data.filter(
    (article) =>
      article.status === "published"
  );

  return (
    <div className="article-list">
      {filteredData.map((article) => (
        <div className="article-item" key={article.id}>
          <div className="article-content">
            <div className="article-details">
              <div className="author-bullet">
                <Avatar className="avatar" img={article.author.avatar} />
                <p className="author-name">{article.author.name}</p>
              </div>
              <h3 className="article-title">
                <Link href={`/articles/${article.id}`}>{article.title}</Link>
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: article.content.substring(0, 200) + `...`,
                }}
              ></p>
            </div>
            <Link href={`/articles/${article.id}`}>
              <Image
                src={article.cover_img ?? ""}
                width={200}
                height={200}
                alt={article.title}
                className="article-image"
              />
            </Link>
          </div>
          <div className="action-bar">
            <Link href={`/articles/${article.id}`}>
              Continue Reading <ArrowLongRightIcon width={24} height={24} />
            </Link>
            {/* <Link href="#" className="icon-link">
                <BookmarkIcon width={24} height={24} /> Save for later
              </Link> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
