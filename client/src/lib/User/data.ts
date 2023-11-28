import axios from "axios";
import { User } from "./types";

export const getUser = async (id: string): Promise<User> => {
    const response = await axios(`http://localhost:3001/users/${id}`)

    return response.data
}
