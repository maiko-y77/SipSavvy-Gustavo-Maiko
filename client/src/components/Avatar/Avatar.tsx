import { UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import "@/components/Avatar/Avatar.scss"

type Props = {
  img?: string
}
const Avatar = ({ img }: Props) => {
  return (
    <>
      {
        img ? <Image src={img} alt="user avatar" width={36} height={36} /> :
          <span className="avatar icon" >
            <UserIcon width={24} height={24} />
          </span>
      }
    </>
  );
};

export default Avatar;
