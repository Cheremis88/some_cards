import { TCard } from '../../utils/types';
import styles from './Card.module.css';

type CardProps = {
  card: TCard;
}

export default function Card({ card }: CardProps) {

  const title = card.title.substring(0, 35);

  return (
    <li className={styles.card}>
      <div className={styles.image} style={{ backgroundColor: card.color }}>
        <span className={styles.number}>{card.id}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{card.body}</p>
    </li>
  )
}