import Image from "next/image";
import styles from "./about.module.scss";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>

      <section className={styles.section}>
        <p>
          Welcome to SipSavvy, where passion meets knowledge, and every sip
          tells a story. Founded by Gustavo Neri and Maiko Yorino, our blogging
          platform is dedicated to unraveling the captivating world of wines for
          enthusiasts and novices alike.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Our Mission</h2>
        <p>
          At SipSavvy, we believe that wine is more than just a beverage;
          it&apos;s a journey through history, culture, and craftsmanship. Our
          mission is to create a community of wine lovers who are not only
          passionate about savoring exquisite wines but also dedicated to
          learning and sharing their knowledge.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Meet the Team</h2>

        <div className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/maiko-yorino.JPG" alt="Maiko Yorino's Picture" fill={true} />
          </div>

          <div className={styles.content}>
            <h3>Maiko Yorino</h3>
            <p>
              Maiko, a seasoned wine educator and enthusiast, has made it her
              mission to demystify the complexities of wine. With a background
              in teaching and a passion for storytelling, she brings a unique
              perspective to the world of wine blogging. Maiko&apos;s approach
              is both informative and engaging, making the learning process
              enjoyable for everyone.
            </p>
            <div className={styles.socials}>
                <p>Follow Maiko: </p>
                <ul>
                    <li>
                        <Link href="https://github.com/maiko-y77" target="_blank">Github <ArrowUpRightIcon className="miniIcon" width={10} height={10} /></Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/maiko-yorino-36a37b270/" target="_blank">LinkedIn <ArrowUpRightIcon className="miniIcon" width={10} height={10} /></Link>
                    </li>
                    <li>
                        <Link href="https://crowdworks.jp/public/employees/5312479?ref=mypage_nav1_account" target="_blank">CrowdWorks <ArrowUpRightIcon className="miniIcon" width={10} height={10} /></Link>
                    </li>
                </ul>
            </div>
          </div>

        </div>

        <div className={styles.card}>

            <div className={styles.image}>
                <Image src="/images/gustavo-neri.JPG" alt="Maiko Yorino's Picture" fill={true} />
            </div>

            <div className={styles.content}>
                <h3>Gustavo Neri</h3>
                <p>
                    As an avid wine connoisseur with a palate that appreciates the subtle nuances of every vintage, Gustavo brings a wealth of knowledge and experience to the table. His journey in the world of wines began as a personal exploration, but it soon evolved into a mission to share the joy of discovering exceptional wines with a broader audience.
                </p>
                <div className={styles.socials}>
                <p>Follow Gustavo: </p>
                    <ul>
                        <li>
                            <Link href="https://gustavoneri.art" target="_blank">Portfolio <ArrowUpRightIcon className="miniIcon" width={10} height={10} /></Link>
                        </li>
                        <li>
                            <Link href="https://github.com/gustavonerip" target="_blank">Github <ArrowUpRightIcon className="miniIcon" width={10} height={10} /></Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/gustavoneriart/" target="_blank">LinkedIn <ArrowUpRightIcon className="miniIcon" width={10} height={10} /></Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
      </section>
    </div>
  );
}
