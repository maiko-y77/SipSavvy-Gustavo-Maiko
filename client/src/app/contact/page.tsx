//CONTACT US PAGE
import './contact.scss';

export default function Register() {
    return (
        <>
        <div className="contact full-width">
           <div className="copy">
            <h1>Sip, Savor, and Reach Out!</h1>
            <p>Whether you have a pressing wine question or just want to chat about your latest wine adventure, we&apos;re all ears (and taste buds)!</p>
            <p>
            Contact us to share your thoughts, inquiries, or simply to say cheers. 
We&apos;re here to uncork conversations, one message at a time. Let&apos;s toast to great wine talk!</p>
           </div>

           <form className="contact-form">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" required />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea></textarea>
                </div>
                <button type="submit">Send</button>
           </form>
           </div>
        </>
    )
}