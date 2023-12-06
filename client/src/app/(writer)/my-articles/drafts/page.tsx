import MyArticlesItem from "@/components/MyArticlesItem/MyArticlesItem";
import { getArticles } from "@/lib/Articles/data";
import React from "react";

const Drafts = async () => {
  const articles = await getArticles();
  return <MyArticlesItem data={articles} status="draft" />;
};

export default Drafts;
