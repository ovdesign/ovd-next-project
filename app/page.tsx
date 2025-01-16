import styles from "./page.module.css";

export default function Home() {
  return (
  <section className={styles.top}>
    <div>
      <h1 className={styles.title}>Time machine is a dream device.</h1>
      <p className={styles.description}>この世界のどこかでタイムマシーンみたいなユメの装置を開発しているとしたら？</p>
    </div>
    <img className={styles.bgimg} src="/img-mv.jpg" alt=""/>
  </section>
  );
}
