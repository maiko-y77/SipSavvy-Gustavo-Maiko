import Logo from "./Logo";
import AdminNavbar from "./navbar/AdminNavbar";
import WriterNavbar from "./navbar/WriterNavbar";
import UserNavbar from "./navbar/UserNavbar";
import DefaultNavbar from "./navbar/DefaultNavbar";

interface NavbarProps {
    type: "admin" | "writer" | "user" | "default";
}

export default function Navbar({ type }: NavbarProps) {

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