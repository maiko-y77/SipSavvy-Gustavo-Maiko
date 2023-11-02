const UserNavbar = () => {
    return (
        <nav className="user-writer-admin-navbar">
            <div className="wrap-links">
                <a href="/">Home</a>
                <a href="/collections">My Collections</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="wrap-icons">
                <a href="/"><img src="#" alt="bell" /></a>
                <a href="/"><img src="#" alt="vector" /></a>
            </div>
            <div className="droppeddown-loggedin">
                <a className="user" href="/"><img className="user" src="#" alt="user" /></a>
                <p>Hello, <span>User!</span></p>
                <a href="/"><img src="#" alt="power-off" /></a>
            </div>
        </nav>
    )
}

export default UserNavbar;