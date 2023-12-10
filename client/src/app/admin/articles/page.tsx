import styles from "./articles.module.scss";
import Tab from "@/components/Tab/Tab";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import AdminArticles from "../../../components/AdminArticles/AdminArticles";
import { getArticles } from "@/lib/Articles/data";

const ArticleLists = async () => {
  const articles = await getArticles();
  return (
    <>
      <div className={styles.container}>

        <div className={styles.tabBar}>
          <Tab text="Articles" path={""} />
        </div>

        <div className={styles.articlesList}>
          <AdminArticles data={articles} />
        </div>
        
      </div>
    </>
  );
};

export default ArticleLists;
