import Logo from "./Logo";
import AdminNavbar from "./navbar/AdminNavbar";
import WriterNavbar from "./navbar/WriterNavbar";
import UserNavbar from "./navbar/UserNavbar";
import DefaultNavbar from "./navbar/DefaultNavbar";

export default function Navbar( { type }) {

    let componentToRender

    switch (type) {
        case "admin":
            componentToRender = <AdminNavbar />;
            break;
        case "writer":
            componentToRender = <WriterNavbar />;
            break;
        case "user":
            componentToRender = <UserNavbar />;
            break;
        case "default":
        default:
            componentToRender = <DefaultNavbar />;
            break;
    }

    return (
        <header className="header">
            <div>
                <Logo />
            </div>
            {componentToRender}
        </header>
    )
}