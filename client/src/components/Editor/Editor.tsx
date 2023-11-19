"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import styles from "./Editor.module.scss";
import {
  PhotoIcon,
  VideoCameraIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

const ArticleEditor = () => {

  return (
    <div className={styles.container}>
      <div className={styles.actionsBar}>
        <div className={styles.wrapper}>
          <p className={styles.textContainer}>
            Auto-save is always on, don&apos;t worry!
          </p>
          <div className={styles.formatBar}>
            <button onClick={() => editor.chain().focus().toggleBold().run()}>
              Bold
            </button>
          </div>
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
          <div className={styles.buttons}>
            <button className={styles.saveDraftBtn}>Save Draft</button>
            <button>Publish</button>
          </div>
        </div>
      </div>
      <input
        name="article_title"
        className={styles.articleTitle}
        placeholder="Title"
      />
      <EditorContent className={styles.editorContainer} editor={editor} />
    </div>
  );
};

export default ArticleEditor;
