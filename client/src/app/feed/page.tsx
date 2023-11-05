import Tab from "@/components/Tab";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const page = () => {
    return (
        <div className="feed-container">
            <div className="articles-container">
                <div className="tab-bar">
                    <Tab text="For you" isActive={true} />
                    <Tab text="Following" isActive={false} />
                </div>
            </div>
            <div className="sidebar">
                <section className="reading-list"><SectionTitle text="Most Liked Articles" /></section>
                <section className="reading-list"> <SectionTitle text="Your Reading List" /></section>
                <div className="banner">
                    <h3>Pour Your Passion Into Our Community!</h3>
                    <p>
                        Share your wine wisdom with our community of enthusiasts. Your knowledge is the key to a richer wine experience for all of us.
                    </p>
                    <Link href="">Start Writing</Link>
                </div>
            </div>
        </div>
    );
}

export default page;