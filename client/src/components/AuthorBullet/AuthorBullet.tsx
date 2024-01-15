import Avatar from "../Avatar/Avatar";
import "@/components/AuthorBullet/authorBullet.scss"


type Props = {
    name: string;
    avatar?: string;
}

export default async function AuthorBullet({ name, avatar }: Props) {
    return (

        <div className="author-bullet">
            <Avatar img={avatar} />
            <span>{name}</span>
        </div>
    );
}

