"use client";
import { options } from "@/app/api/auth/[...nextauth]/options";
import styles from "./MyArticlesItem.module.scss";
import { Article } from "@/lib/Article/types";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

type ArticlesProps = {
  data: Article[];
  status: string
};

const MyArticlesItem = ({ data , status }: ArticlesProps) => {
  const session = useSession();
  const filteredData: Article[] = data.filter(
    (article) => article.author.id === session.data?.user.id && article.status === status
  );

  return (
    <div className={styles.articlesList}>
      {filteredData.map((article) => (
        <div key={article.id} className={styles.articleItem}>
          <div className={styles.title}>
            {article.title} {status === "draft" && <em>[draft]</em>}
          </div>
          <div className={styles.actions}>
            <Link href="" className="icon"><PencilSquareIcon width={24} height={24} /></Link>
            <Link href="" className="icon"><TrashIcon width={24} height={24} /></Link>
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
