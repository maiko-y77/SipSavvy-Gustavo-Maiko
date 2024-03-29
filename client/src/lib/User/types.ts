import { Article } from "../Article/types";

export type User = {
    id: string;
    name: string;
    last_name: string;
    email: string;
    avatar: String;
    role: String;
    Articles: Article[],
    followers: [],
    following: []
}