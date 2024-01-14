import DraftEditor from "@/components/DraftEditor/DraftEditor";
import axios from "axios";

const getArticleById = async (id:string) => {
  try {
    const res = await axios.get(`http://localhost:3001/articles/${id}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function DraftArticle({ params }:{ params: any }) {
  const { id } = params;
  const article = await getArticleById(id);
  const { title, content, cover_img } = article;

  return (
    <DraftEditor
      id={id}
      title={title}
      content={content}
      cover_img={cover_img}
    />
  );
}
