import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '../app/globals.scss'


export default function NotFound() {
    return (
        <>
            <Navbar type="default" />
            <main className="main">
                <div className="overlap-group">
                    <div className="text-wrapper">404</div>
                    <div className="group">
                        <div className="primary-btn">
                            <div className="sign-up">Go to Home</div>
                        </div>
                        <p className="the-page-you-re">The page you&#39;re seeking can’t be found.</p>
                        <p className="div">Oops, this page is a rare vintage!</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
