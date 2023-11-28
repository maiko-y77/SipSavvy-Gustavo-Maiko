import Articles from "@/components/Articles/Articles";
import { getUser } from "@/lib/User/data";
import Avatar from "@/components/Avatar/Avatar";
import SearchBar from "@/components/SearchBar/SearchBar";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Tab from "@/components/Tab/Tab";
import Link from "next/link";
import "@/app/(user)/writers/[id]/writerProfile.scss"

export default async function Page({ params }: { params: { id: string } }) {
  const writer = await getUser(params.id);

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="author-card">
          <div className="author-info">
            <div className="avatar">
              <Avatar className="avatar" img={writer.avatar.toString()} />
            </div>
            <div className="author-name">
              <h2>{writer.name} {writer.last_name}</h2>
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
          <Tab text={`${writer.name} ${writer.last_name}'s Articles`} isActive={true} />
          <SearchBar />
        </div>

        <ul className="articles-list">
          <li>
            {writer.Articles.map((article, index) => (
              <Articles data={writer.Articles} />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};
