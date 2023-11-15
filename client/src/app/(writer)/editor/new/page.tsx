import styles from "./newArticle.module.scss";

const NewArticle = () => {
  return (
    <div className={styles.container}>
      <form>
        <div className="options-bar">Options bar</div>
        <div className="editor-container">
            <input type="text"/>
        </div>
        <button>Save Draft</button>
        <button>Publish</button>
      </form>
    </div>
  );
};

export default NewArticle;
