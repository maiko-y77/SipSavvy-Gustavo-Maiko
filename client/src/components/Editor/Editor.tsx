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
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../../utils/firebase";

const storage = getStorage(app);

const ArticleEditor = () => {
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:3001/articles/", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
      }),
    });

    console.log(res);
  };

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
                onChange={(e) => setFile(e.target.files[0])}
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
          <button className={styles.publishButton} onClick={handleSubmit}>
            Publish
          </button>
        </div>
      </div>
      <input
        className={styles.title}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
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
