import GenerateButton from './GenerateButton';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <header className={styles.heroText}>
        <div className={styles.div}>
          <h1>WELCOME TO COoL TOY STORE</h1>
          <p className="description">
            This is a store where you can find cool toys.
          </p>
          <GenerateButton />
        </div>
      </header>
    </main>
  );
}
