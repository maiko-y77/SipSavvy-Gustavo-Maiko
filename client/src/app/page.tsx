//HOME PAGE
import './home.scss'
import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import Link from 'next/link'


export default async function Home() {

  const session = await getServerSession(options)

  if(session) redirect('/feed')

  return (
    <>
      <div className="full-width hero">
        <div className="hero-content">
          <h1>Stay enticed.</h1>
          <p>
            Explore narratives, knowledge, and insights from connoisseurs on all
            things wine.
          </p>
          <Link href="/login" className="primary-btn">Start reading</Link>
        </div>
        <div className="bg-image"></div>
      </div>
    </>
  );
}
