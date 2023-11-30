import axios from "axios";
import { User } from "../User/types";

export const getUsers = async (): Promise<User[]> => {
    const response = await axios(`http://localhost:3001/users`)

    return response.data
}
