import { BookmarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import './article.scss'
import AuthorBullet from "../AuthorBullet/AuthorBullet";
import { getArticles } from '../../lib/Articles/data'


export default async function Article() {

  const articles = await getArticles()

  return (
    <div className="article-item">
      <div className="article-content">
        <AuthorBullet />
        {articles.map(({ title }) => <div>
          <h3 className="article-title"><Link href="#">{title}</Link></h3>
        </div>)}
        {articles.map(({ content }) => <div><p>
          {content}
        </p></div>)}
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
  );
};