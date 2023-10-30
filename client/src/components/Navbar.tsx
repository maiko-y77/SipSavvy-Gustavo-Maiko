export default function Navbar() {
    return (
        <header className="header">
            <div>
                <a href="/"><img className="header-navbar-logo" src="" alt="Header / Navbar / Logo" /></a>
            </div>
            <nav className="navbar">
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
                <a href="/login">Sign In</a>
                <div>
                    <a href="/register">Sign Up</a>
                </div>
            </nav>
        </header>
    )
}