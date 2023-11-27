import axios from "axios";
import { User } from "./types";

export const getUser = async (email: string): Promise<User> => {
    const response = await axios(`http://localhost:3001/auth/login/${email}`)

    return response.data
}
