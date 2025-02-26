import styles from "./page.module.css";
import Image from "next/image";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

const data: {
  contents: News[]} = {
    
  contents: [
    {
      id: "1",
      title: "タイムマシーン開発に着工",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/02/13",
      createdAt: "2025/02/13",
      },
      {
        id: "2",
        title: "タイムマシーン開発に成功",
        category: {
          name: "更新情報",
        },
        publishedAt: "2025/02/15",
        createdAt: "2025/02/15",
      },
      {
        id: "3",
        title: "タイムマシーン販売開始",
        category: {
          name: "更新情報",
        },
        publishedAt: "2025/02/20",
        createdAt: "2025/02/20",
        },
    ],
  };

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
  <section className={styles.top}>
    <div>
      <h1 className={styles.title}>Time machine is a dream device.</h1>
      <p className={styles.description}>この世界のどこかでタイムマシーンみたいなユメの装置を開発しているとしたら？</p>
    </div>
      <Image className={styles.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200} />
  </section>
  <section className={styles.news}>
    <h2 className={styles.newsTitle}>News</h2>
        <ul>
          {sliceData.map((article) => (
            <li key={`news-${article.id}`} className={styles.list}>
              <div className={styles.link}>
                <Image className={styles.image} src="/no-image.png" alt="No Image" width={1200} height={630} />
                <dl className={styles.contents}>
                  <dt className={styles.newsItemTitle}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <span className={styles.tag}>{article.category.name}</span>
                    <span className={styles.date}>
                      <Image src="/clock.svg" alt="" width={16} height={16} />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
  </section>
    </>
  );
}
