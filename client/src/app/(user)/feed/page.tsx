import Tab from "@/components/Tab/Tab";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Link from "next/link";
import Article from "@/components/Article/Article";
import './feed.scss'

const page = () => {

    return (
        <div className="feed-container">
            <div className="articles-container">
                <div className="tab-bar">
                    <Tab text="For you" isActive={true} />
                    <Tab text="Following" isActive={false} />
                </div>
        <div className="articles-list">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
      <div className="sidebar">
        <section className="reading-list">
          <SectionTitle text="Most Liked Articles" />
          <ul className="most-liked-list">
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

            <li>
              <Link href="#">
                Thanks. Great insights for my next wine purchases.
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
