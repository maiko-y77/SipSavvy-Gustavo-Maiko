import axios from "axios";

import { Article } from "../Article/types";

export const getArticles = async (): Promise<Article[]> => {
    const response = await fetch("http://localhost:3001/articles", {
        cache: "no-cache"
    })
    return response.json()
}
