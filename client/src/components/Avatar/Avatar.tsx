import { UserIcon } from "@heroicons/react/24/outline";

const Avatar = () => {
  return (
    <a className="avatar icon" href="/">
      <UserIcon width={24} height={24} />
    </a>
  );
};

export default Avatar;
