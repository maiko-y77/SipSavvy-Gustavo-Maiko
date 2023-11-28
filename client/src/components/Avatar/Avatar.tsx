import { UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {
  img?: string
  className?: string
}
const Avatar = ({ img, className }: Props) => {
  return (
    <>
      {
        img ? <Image className={className} src={img} alt="user avatar" width={36} height={36} /> :
          <span className="avatar icon" >
            <UserIcon width={24} height={24} />
          </span>
      }
    </>
  );
};

export default Avatar;
