import styles from './ModalCard.module.css';

type ModalCardProps = {
  color: string;
  title: string;
  body: string;
}

export default function ModalCard({ color, title, body }: ModalCardProps) {
  return (
    <>
      <div className={styles.image} style={{ backgroundColor: color }}>
      </div>
      <div className={styles.text_wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{body}</p>
      </div>
    </>
  );
}