import { BookmarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import './articles.scss'
import AuthorBullet from "../AuthorBullet/AuthorBullet";
import { getArticles } from '../../lib/Articles/data'

export default async function Articles() {

  const articles = await getArticles()

  return (
    <div className="article-item">
      {articles.map(({ id, title, content }) => <div><div className="article-content">
        <AuthorBullet />
        <h3 className="article-title"><Link href={`/articles/${id}`}>{title}</Link></h3>
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
      </div>)}
    </div>
  );
};