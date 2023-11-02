import LinksBar from "./LinksBar";

function AdminNavbar() {
    return (
        <nav className="user-writer-admin-navbar">
            <div className="wrap-links">
                <a href="/dashboard">Dashboard</a>
                <a href="/">Home</a>
                <a href="/users">Users</a>
                <a href="/articles">Articles</a>
                <a href="/collections">My Collections</a>
            </div>
            <LinksBar />
        </nav>
    );
}

export default AdminNavbar;