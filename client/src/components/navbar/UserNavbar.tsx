import { BellIcon, EnvelopeIcon, UserIcon, PowerIcon } from '@heroicons/react/24/outline'

const UserNavbar = () => {
    return (
        <nav className="user-writer-admin-navbar">
            <div className="wrap-links">
                <a href="/">Home</a>
                <a href="/collections">My Collections</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="wrap-icons">
                <a href="/" className='icon'>
                    <BellIcon width={24} height={24}  />
                </a>
                <a href="/" className='icon'>
                    <EnvelopeIcon width={24} height={24}  />
                </a>
            </div>

            <div className="droppeddown-loggedin">
                <a className="avatar icon" href="/" >
                    <UserIcon width={24} height={24} />
                </a>
                <p>Hello, <span>User!</span></p>
            </div>
            <a href="/" className='icon'>
                    <PowerIcon width={22} height={22} />
                </a>
        </nav>
    )
}

export default UserNavbar;