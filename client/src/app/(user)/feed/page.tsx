import Tab from "@/components/Tab/Tab";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Link from "next/link";
import Articles from "@/components/Articles/Articles";
import "./feed.scss";
import { getArticles } from "@/lib/Articles/data";

const page = async () => {
  const allArticles = await getArticles();
  const articles = allArticles.slice(0, 3);

  return (
    <div className="feed-container">
      <div className="articles-container">
        <div className="articles-list">
          <Articles data={articles} />
        </div>
      </div>
    </div>
  );
};
export default page;
