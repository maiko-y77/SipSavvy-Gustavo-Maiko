"use client";
import {
  ArrowUpTrayIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import styles from "./Editor.module.scss";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const ArticleEditor = () => {
  const [value, setValue] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  useEffect(() => {
    const upload = () => {};

    file && upload;
  }, [file]);

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <div>
          <p>Insert</p>
          {
            <div>
              <input
                type="file"
                id="icon"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <button className={styles.addButton}>
                <label htmlFor="icon">
                  <PhotoIcon width={16} height={16} />
                </label>
              </button>
              <button className={styles.addButton}>
                <ArrowUpTrayIcon width={16} height={16} />
              </button>
              <button className={styles.addButton}>
                <VideoCameraIcon width={16} height={16} />
              </button>
            </div>
          }
        </div>
        <div>
          <button className={styles.saveDraftButton}>Save Draft</button>
          <button className={styles.publishButton}>Publish</button>
        </div>
      </div>
      <input className={styles.title} type="text" placeholder="Title" />
      <div className={styles.editor}>
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
