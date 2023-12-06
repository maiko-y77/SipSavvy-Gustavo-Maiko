import MyArticlesItem from "../../../components/MyArticlesItem/MyArticlesItem";
import { getArticles } from "@/lib/Articles/data";

const MyArticles = async () => {
  const articles = await getArticles();
  return <MyArticlesItem data={articles} status="published"/>;
};

export default MyArticles;
