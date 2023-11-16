import {
  LinkIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import styles from "./newArticle.module.scss";

const NewArticle = () => {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.actionsBar}>
          <div className={styles.wrapper}>
            <p className={styles.textContainer}>
              Auto-save is always on, don&apos;t worry!
            </p>
            <div className={styles.insertBar}>
              <p>Insert: </p>
              <div className={styles.icon}>
                <PhotoIcon />
              </div>
              <div className={styles.icon}>
                <VideoCameraIcon />
              </div>
              <div className={styles.icon}>
                <LinkIcon />
              </div>
            </div>
            <div className={styles.buttons}><button className={styles.saveDraftBtn}>Save Draft</button>
            <button>Publish</button></div>
          </div>
        </div>
        <div className={styles.editorContainer}>
          <input
            className={styles.articleTitle}
            type="text"
            name="article-title"
            placeholder="Title"
          />
          <textarea
            className={styles.articleContent}
            name="article-content"
            placeholder="What do you want to talk about today?"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default NewArticle;
