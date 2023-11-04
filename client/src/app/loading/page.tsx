import Dialog from "@/components/Dialog";

const Loading = () => {
    return (
        <Dialog>
            <div className="loading">
                <div className="overlap-group">
                    <div className="loading-circles">
                        <div className="ellipse"></div>
                        <div className="div"></div>
                        <div className="ellipse-2"></div>
                    </div>
                    <p className="uncorking-the">Uncorking the secrets of the vine for you,<br />hang tight...</p>
                    <img className="header-navbar-logo" src='/images/SipSavvy-Logo.svg' />
                </div>
            </div>
        </Dialog>
    );
};

export default Loading;
