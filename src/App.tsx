import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.page}>
      <h1>Web Technologies I</h1>
      <p>Welcome 👋</p>

      <div className={styles.card}>
        <p>
          <strong>Name:</strong> Lujain Mahesar
        </p>
        <p>
          <strong>Section:</strong> A
        </p>
        <p>
          <strong>Project:</strong> WebTech1 Frontend Starter
        </p>
      </div>
    </div>
  );
}
