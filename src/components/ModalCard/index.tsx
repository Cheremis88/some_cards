import styles from './ModalCard.module.css';

type ModalCardProps = {
  color: string;
  title: string;
  body: string;
}

export default function ModalCard({ color, title, body }: ModalCardProps) {
  return (
    <>
      <div className={styles.test_image} style={{ backgroundColor: color }}>
      </div>
      <div className={styles.forText}>
        <h3 className={styles.test_title}>{title}</h3>
        <p className={styles.test_text}>{body}</p>
      </div>
    </>
  );
}