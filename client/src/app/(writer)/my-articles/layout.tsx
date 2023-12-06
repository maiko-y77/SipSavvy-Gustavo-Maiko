import Link from "next/link";
import styles from "./MyArticles.module.scss";
import Tab from "@/components/Tab/Tab";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {

  return (
    <div className={styles.container}>

      <div className={styles.content}>

        <div className={styles.tabBar}>
          <Link href="/my-articles">
            <Tab text="My Articles" isActive={true} />
          </Link>
          <Link href="/my-articles/drafts">
            <Tab text="My Drafts" isActive={false} />
          </Link>
          <Link href="/my-articles/deleted">
            <Tab text="Deleted" isActive={false} />
          </Link>
          <Link href="/editor/new" className={styles.newArticleBtn}>
            New Article
          </Link>
        </div>

        <div className={styles.articlesList}>{children}</div>

      </div>

      <div className={styles.sidebar}>Sidebar</div>

    </div>
  );
}
