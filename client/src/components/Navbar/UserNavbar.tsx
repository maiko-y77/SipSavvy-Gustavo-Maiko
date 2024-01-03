import LinksBar from "./LinksBar";


const UserNavbar = () => {
  return (
    <nav className="user-writer-admin-navbar">
      <div className="wrap-links">
        <a href="/">Home</a>
        <a href="/collections">My Collections</a>
        <a href="/contact">Contact Us</a>
      </div>
      <LinksBar />
    </nav>
  );
};

export default UserNavbar;
