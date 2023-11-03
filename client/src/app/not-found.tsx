import '../app/globals.scss'


export default function NotFound() {
    return (
        <>
                <div className="overlap-group">
                    <div className="text-wrapper background">404</div>
                    <div className="group">
                        <a className="primary-btn" href="/">Go to Home</a>
                        <p className="the-page-you-re">The page you&#39;re seeking can’t be found.</p>
                        <p className="div">Oops, this page is a rare vintage!</p>
                    </div>
                </div>
        </>
    )
}