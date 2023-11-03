import Tab from "@/components/Tab";

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
                <section className="most-liked">Most Liked</section>
                <section className="reading-list">Your Reading List</section>
                <div className="banner">Writing banner</div>
            </div>
        </div>
    );
}

export default page;