import LinksBar from "./LinksBar";

const WriterNavbar = () => {
  return (
    <nav className="user-writer-admin-navbar">
      <div className="wrap-links">
        <a href="/">Home</a>
        <a href="/articles">My Articles</a>
        <a href="/Profile">My Profile</a>
        <a href="/collections">My Collections</a>
        <a href="/contact">Contact Us</a>
      </div>
      <LinksBar />
    </nav>
  );
};

export default WriterNavbar;
