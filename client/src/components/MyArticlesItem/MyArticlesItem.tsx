"use client";
import { options } from "@/app/api/auth/[...nextauth]/options";
import styles from "./MyArticlesItem.module.scss";
import { Article } from "@/lib/Article/types";
import { useSession } from "next-auth/react";

type ArticlesProps = {
  data: Article[];
};

const MyArticlesItem = ({ data }: ArticlesProps) => {
  const session = useSession();
  const filteredData: Article[] = data.filter(
    (article) => article.author.id === session.data?.user.id
  );

  return (
    <div className={styles.articlesList}>
      {filteredData.map((article) => (
        <div key={article.id} className={styles.articleItem}>
          {article.author.name}
        </div>
      ))}
    </div>
  );
};

export default MyArticlesItem;
