import Tab from "@/components/Tab";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import CollectionItem from "@/components/CollectionItem/CollectionItem";

const page = () => {

    return (
        <div className="feed-container">
            <div className="articles-container">
                <div className="tab-bar">
                    <Tab text="My Collections" isActive={true} />
                </div>
                <div className="articles-list">
                    <CollectionItem />
                    <CollectionItem />
                    <CollectionItem />
                </div>
            </div>
            <div className="sidebar">
                <section className="reading-list">
                    <SectionTitle text="Recently Saved" />
                    <ul className="most-liked-list">
                        <li>
                            <Link href="#">
                                These Are the Embarrassing, Unfashionable Wines Sommeliers (Like
                                Me) Drink on Their Days Off
                                <br /><span>Saved on</span>Grape Varieties Guides
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                These Are the Embarrassing, Unfashionable Wines Sommeliers (Like
                                Me) Drink on Their Days Off
                                <br /><span>Saved on</span>Grape Varieties Guides
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className="reading-list">
                    <SectionTitle text="Your Reading List" />
                    <ul className="in-your-reading-list">
                        <li>
                            <Link href="#">
                                These Are the Embarrassing, Unfashionable Wines Sommeliers (Like
                                Me) Drink on Their Days Off
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Winemakers Can No Longer Afford to Drink Their Own Wine in
                                America
                            </Link>
                        </li>
                    </ul>
                </section>
                <div className="banner">
                    <h3>Pour Your Passion Into Our Community!</h3>
                    <p>
                        Share your wine wisdom with our community of enthusiasts. Your
                        knowledge is the key to a richer wine experience for all of us.
                    </p>
                    <Link href="">Start Writing</Link>
                </div>
            </div>
        </div>
    );
};
export default page;
