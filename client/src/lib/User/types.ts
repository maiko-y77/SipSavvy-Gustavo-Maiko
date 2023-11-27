import { Article } from "../Article/types";

export type User = {
    id: string;
    name: string;
    last_name: string;
    avatar: String;
    Articles: Article[]
}