import Tab from "@/components/Tab/Tab";
import styles from "./MyArticles.module.scss";
import MyArticlesItem from "../../../components/MyArticlesItem/MyArticlesItem";
import Link from "next/link";

const MyArticles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        
        <div className="tab-bar">
          <Tab text="My Articles" isActive={true} />
          <Tab text="My Drafts" isActive={false} />
          <Link href="/editor/new" className={styles.newArticleBtn}>New Article</Link>
        </div>

        <div className={styles.articlesList}>
          <MyArticlesItem />
        </div>
      </div>
      <div className={styles.sidebar}>Sidebar</div>
    </div>
  );
};

export default MyArticles;
