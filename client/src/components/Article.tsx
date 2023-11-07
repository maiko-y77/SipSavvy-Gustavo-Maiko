import { BookmarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import AuthorBullet from "./AuthorBullet";

const Article = () => {
  return (
      <div className="article-item">
        <div className="article-content">
          <AuthorBullet />
          <h3 className="article-title"><Link href="#">What Does 5,000-Year-Old Wine Taste Like?</Link></h3>
          <p>
            The short answer: 😖 — By now, you have probably heard the
            5,000-year-old tomb of Queen Meret-Neith has been discovered. When I
            was a kid, I was fascinated that the ancient Egyptians buried their
            famous ...
          </p>
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

export default Article;