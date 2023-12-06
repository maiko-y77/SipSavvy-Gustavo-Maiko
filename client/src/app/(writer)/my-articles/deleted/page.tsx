import MyArticlesItem from "@/components/MyArticlesItem/MyArticlesItem";
import { getArticles } from "@/lib/Articles/data";
import React from "react";

const Deleted = async () => {
  const articles = await getArticles();
  return <MyArticlesItem data={articles} status="deleted" />;
};

export default Deleted;
