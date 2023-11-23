"use client";
import {
  ArrowUpTrayIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import styles from "./Editor.module.scss";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const ArticleEditor = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <div>
          <p>Insert</p>
          <button className={styles.addButton}>
            <PhotoIcon width={16} height={16} />
          </button>
          <button className={styles.addButton}>
            <ArrowUpTrayIcon width={16} height={16} />
          </button>
          <button className={styles.addButton}>
            <VideoCameraIcon width={16} height={16} />
          </button>
        </div>
      </div>
      <input className={styles.title} type="text" placeholder="Title" />
      <div className={styles.editor}>
        {/* <button className={styles.button}>
          <PlusIcon width={16} height={16} />
        </button>
          <div className={styles.add}>
            <button className={styles.addButton}>
              <PhotoIcon width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <ArrowUpIcon width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <VideoCameraIcon width={16} height={16} />
            </button>
          </div> */}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
    </div>
  );
};

export default ArticleEditor;
