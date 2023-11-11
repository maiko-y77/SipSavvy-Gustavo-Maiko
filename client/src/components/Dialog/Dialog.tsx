import './dialog.scss'

const Dialog = ({children}:{children: React.ReactNode}) => {
    return (
        <>
        <div className="dialog-window">
            <div className="dialog-content">{children}</div>
            <div className="dialog-overlay"></div>
        </div>
        </>
    );
}

export default Dialog;