"use client";
import { options } from "@/app/api/auth/[...nextauth]/options";
import styles from "./MyArticlesItem.module.scss";
import { Article } from "@/lib/Article/types";
import { useSession } from "next-auth/react";
import Link from "next/link";

type ArticlesProps = {
  data: Article[];
};

const MyArticlesItem = ({ data }: ArticlesProps) => {
  const session = useSession();
  const filteredData: Article[] = data.filter(
    (article) => article.author.id === session.data?.user.id && article.status === 'published'
  );

  return (
    <div className={styles.articlesList}>
      {filteredData.map((article) => (
        <div key={article.id} className={styles.articleItem}>
          <div className={styles.title}>
            {article.title}
          </div>
        </div>
      ))}
      {
        filteredData.length === 0 && <div className={styles.emptyState}><p>You have no published articles yet. </p> <Link href="/editor/new">Start Writing</Link></div>
      }
    </div>
  );
};

export default MyArticlesItem;
