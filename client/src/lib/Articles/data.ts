import axios from "axios";

import { Article } from "../Article/types";

export const getArticles = async (): Promise<Article[]> => {
    const response = await axios("http://localhost:3001/articles")

    return response.data
}
