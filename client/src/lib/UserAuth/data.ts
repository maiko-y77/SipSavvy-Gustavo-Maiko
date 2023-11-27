import axios from "axios";
import { User } from "./types";

export const getArticle = async (email: string): Promise<User> => {
    const response = await axios(`http://localhost:3001/auth/login/${email}`)

    return response.data
}
