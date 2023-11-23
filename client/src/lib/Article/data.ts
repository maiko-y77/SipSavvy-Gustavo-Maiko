import axios from "axios";
import { Article } from "./types";

export const getArticle = async (id: string): Promise<Article> => {
    const response = await axios(`http://localhost:3001/articles/${id}`)

    return response.data
}
