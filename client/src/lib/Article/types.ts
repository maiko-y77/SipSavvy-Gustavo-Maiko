export type Article = {
    title: string;
    content: string;
    id: string;
    cover_img?: string;
    date_created: string;
    authorId: string;
    status: string;
    author: {
        id: string;
        name: string;
        avatar: string;
    }
}