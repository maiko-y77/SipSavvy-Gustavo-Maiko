import Article from "@/components/Article";
import Avatar from "@/components/Avatar/Avatar";
import SearchBar from "@/components/SearchBar/SearchBar";
import SectionTitle from "@/components/SectionTitle";
import Tab from "@/components/Tab";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const page = () => {
  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="author-card">
          <div className="author-info">
            <div className="avatar">
              <UserIcon />
            </div>
            <div className="author-name">
              <h2>Jon Doe</h2>
              <p>20k Followers</p>
            </div>
          </div>
          <div className="author-bio">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              venenatis ligula leo, vitae imperdiet neque pulvinar vitae. Nulla
              facilisi. Aliquam.
            </p>
          </div>

          <Link href="#">Follow</Link>
        </div>
        <div className="following-list">
          <div className="tab-bar">
            <SectionTitle text="Following" />

            <SearchBar />
          </div>

          <ul>
            <li>
              <Avatar />
              <Link href="/writer/leonardodicapprio">Leonardo Dicapprio</Link>
            </li>
            <li>
              <Avatar />
              <Link href="/writer/leonardodicapprio">Jane Doe</Link>
            </li>
            <li>
              <Avatar />
              <Link href="/writer/leonardodicapprio">Richard Owsen</Link>
            </li>
            <li>
              <Avatar />
              <Link href="/writer/leonardodicapprio">Lana DelRey</Link>
            </li>
          </ul>

          <Link href="writer/jondoe/following" className="link">
            See all
          </Link>
        </div>
      </div>

      <div className="articles-container">
        <div className="tab-bar">
          <Tab text="Jon Doe's Articles" isActive={true} />
          <SearchBar />
        </div>

        <ul className="articles-list">
          <li>
            <Article />
            <Article />
            <Article />
            <Article />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
