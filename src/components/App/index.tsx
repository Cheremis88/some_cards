import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Сдержанное название</h1>
        <p className={styles.slogan}>Кричащее описание произвольной длины</p>
      </header>
      <ul></ul>
    </div>
  );
}