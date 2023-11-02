import {
  BellIcon,
  EnvelopeIcon,
  UserIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

const LinksBar = () => {
    return (
       <>
       <div className="wrap-icons">
            <a href="/" className="icon">
            <BellIcon width={24} height={24} />
            </a>
            <a href="/" className="icon">
            <EnvelopeIcon width={24} height={24} />
            </a>
        </div>
        <div className="droppeddown-loggedin">
            <a className="avatar icon" href="/">
            <UserIcon width={24} height={24} />
            </a>
            <p>
            Hello, <span>Username</span>!
            </p>
        </div>
        <a href="/" className="icon">
            <PowerIcon width={22} height={22} />
        </a>
       </>
    );
}

export default LinksBar;