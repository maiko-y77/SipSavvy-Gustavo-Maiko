import MyArticlesItem from "../../../components/MyArticlesItem/MyArticlesItem";
import { getArticles } from "@/lib/Articles/data";

const MyArticles = async () => {
  const articles = await getArticles();
  return <MyArticlesItem data={articles} />;
};

export default MyArticles;
