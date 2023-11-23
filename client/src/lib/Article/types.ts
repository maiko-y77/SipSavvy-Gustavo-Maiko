export type Article = {
    title: string;
    content: string;
    id: string;
    cover_img: string;
    date_created: string;
    authorId: string;
    author: {
        id: string;
        name: string;
    }
}