import Articles from "@/components/Articles/Articles";
import { getUser } from "@/lib/User/data";
import Avatar from "@/components/Avatar/Avatar";
import Tab from "@/components/Tab/Tab";
import "@/app/(user)/writers/[id]/writerProfile.scss";

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
              <h2>
                {writer.name} {writer.last_name}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="articles-container">
        <div className="tab-bar">
          <Tab
            text={`${writer.name} ${writer.last_name}'s Articles`}
            path={`/writers/${writer.id}`}
          />
        </div>

        <ul className="articles-list">
          <li>
            {/* {writer.Articles.map((article, index) => ( */}
            <Articles /*key={article.id}*/ data={writer.Articles} />
            {/* ))} */}
          </li>
        </ul>
      </div>
    </div>
  );
}
