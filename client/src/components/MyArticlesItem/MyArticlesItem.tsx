"use client";
import styles from "./MyArticlesItem.module.scss";
import { Article } from "@/lib/Article/types";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  EyeIcon,
  EyeSlashIcon,
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { deleteArticle } from "@/utils/deleteArticle";
import { permDeleteArticle } from "@/utils/permDeleteArticle";
import { publishArticle } from "@/utils/publishArticle";
import { sendArticleToDrafts } from "@/utils/sendArticleToDrafts";
import { useRouter } from "next/navigation";

type ArticlesProps = {
  data: Article[];
  status: string;
};

const MyArticlesItem = ({ data, status }: ArticlesProps) => {
  const session = useSession();
  const router = useRouter();

  const filteredData: Article[] = data.filter(
    (article) =>
      article.author.id === session.data?.user.id && article.status === status
  );

  const handleDeleteArticle = async (articleId: string) => {
    try {
      await deleteArticle(articleId);
      router.refresh();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handlePermDeleteArticle = async (articleId: string) => {
    try {
      await permDeleteArticle(articleId);
      router.refresh();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handlePublishArticle = async (articleId: string) => {
    try {
      await publishArticle(articleId);
      router.refresh();
    } catch (error) {
      console.error("Error publishing article:", error);
    }
  };

  const handleSendArticleToDrafts = async (articleId: string) => {
    try {
      await sendArticleToDrafts(articleId);
      router.refresh();
    } catch (error) {
      console.error("Error publishing article:", error);
    }
  };

  return (
    <div className={styles.articlesList}>
      {filteredData.map((article) => (
        <div key={article.id} className={styles.articleItem}>
          <div className={styles.title}>
            {<Link href={`articles/${article.id}`} target="_blank">{article.title}</Link>} {status === "draft" && <em>[draft]</em>}
          </div>
          <div className={styles.actions}>
            {article.status !== "published" ? (
              <Link
                href=""
                className="icon"
                onClick={() => handlePublishArticle(article.id)}
              >
                <EyeIcon width={24} height={24} />
              </Link>
            ) : (
              <Link
                href=""
                className="icon"
                onClick={() => handleSendArticleToDrafts(article.id)}
              >
                <EyeSlashIcon width={24} height={24} />
              </Link>
            )}
            {article.status !== "deleted" ? (
              <>
                <Link href={`/editor/${article.id}`} className="icon">
                  <PencilSquareIcon width={24} height={24} />
                </Link>
                <Link
                  href=""
                  className="icon"
                  onClick={() => handleDeleteArticle(article.id)}
                >
                  <TrashIcon width={24} height={24} />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href=""
                  className="icon"
                  title="Republish Article"
                  onClick={() => handlePublishArticle(article.id)}
                >
                  <EyeIcon width={24} height={24} />
                </Link>
                <Link
                  href=""
                  className="icon"
                  title="Send to Drafts"
                  onClick={() => handleSendArticleToDrafts(article.id)}
                >
                  <EyeSlashIcon width={24} height={24} />
                </Link>
                <Link
                  href=""
                  className="icon"
                  title="Delete Permanently"
                  onClick={() => handlePermDeleteArticle(article.id)}
                >
                  <XMarkIcon width={24} height={24} />
                </Link>
              </>
            )}
          </div>
        </div>
      ))}
      {filteredData.length === 0 && (
        <div className={styles.emptyState}>
          <p>You have no published articles yet. </p>{" "}
          <Link href="/editor/new">Start Writing</Link>
        </div>
      )}
    </div>
  );
};

export default MyArticlesItem;
