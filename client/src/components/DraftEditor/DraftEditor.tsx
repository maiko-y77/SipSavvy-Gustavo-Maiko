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
import axios from "axios";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const storage = getStorage(app);

export default function DraftEditor({ id, title, content, cover_img } : { id: string, title: string, content:string, cover_img: string }) {
  const router = useRouter();
  const [newValue, setNewValue] = useState(content);
  const [file, setFile] = useState<any>(null);
  const [newMedia, setNewMedia] = useState(cover_img);
  const [newTitle, setNewTitle] = useState(title);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl:any = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + file.name;
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
            setNewMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const slugify = (str:string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await axios.put(`http://localhost:3001/articles/${id}`, {
      // body: JSON.stringify({
      status: "published",
      title: newTitle,
      content: newValue,
      cover_img: newMedia,
      slug: slugify(newTitle),
      // }),
    });

    if (res.status === 200) {
      const data = await res.data;
      router.push(`/articles/${data.id}`);
    }
  };

  const handleDraft = async () => {
    const res = await axios.put(`http://localhost:3001/articles/${id}`, {
      status: "draft",
      title: newTitle,
      content: newValue,
      cover_img: newMedia,
      slug: slugify(newTitle),
    });

    if (res.status === 200) {
      router.replace(`/my-articles/drafts`);
    }
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
                onChange={(e) => {
                    const selectedFile = e.target.files?.[0];
                    if (selectedFile) {
                      setFile(selectedFile);
                    }
                  }
                }
                style={{ display: "none" }}
              />
              <button className={styles.addButton}>
                <label htmlFor="icon">
                  <PhotoIcon width={16} height={16} />
                </label>
              </button>
              {/* <button className={styles.addButton}>
                <ArrowUpTrayIcon width={16} height={16} />
              </button>
              <button className={styles.addButton}>
                <VideoCameraIcon width={16} height={16} />
              </button> */}
            </div>
          }
          {previewUrl && (
            <Image src={previewUrl} alt="Preview" width={100} height={50} />
          )}
        </div>
        <div>
          <button className={styles.saveDraftButton} onClick={handleDraft}>
            Save Draft
          </button>
          <button className={styles.publishButton} onClick={handleSubmit}>
            Publish
          </button>
        </div>
      </div>
      <input
        className={styles.title}
        type="text"
        placeholder="Title"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <div className={styles.editor}>
        <ReactQuill
          theme="bubble"
          value={newValue}
          onChange={setNewValue}
          placeholder="Tell your story..."
        />
      </div>
    </div>
  );
}
