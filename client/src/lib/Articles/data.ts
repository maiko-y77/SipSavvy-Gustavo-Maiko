import axios from "axios";
import { Articles } from "./types";

export const getArticles = async (): Promise<Articles[]> => {
    const response = await axios("http://localhost:3001/articles")

    return response.data
}
