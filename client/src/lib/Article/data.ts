import axios from "axios";
import { SingleArticle } from "./types";

export const getSingleArticle = async (id: string): Promise<SingleArticle[]> => {
    const response = await axios(`http://localhost:3001/articles/${id}`)

    return response.data
}
