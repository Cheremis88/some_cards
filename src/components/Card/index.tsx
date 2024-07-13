import { TCard } from '../../utils/types';
import { useDispatch } from '../../services/store';
import { setLike, removeCard } from '../../services/slice';
import styles from './Card.module.css';
import { MouseEvent } from 'react';

type CardProps = {
  card: TCard;
}

export default function Card({ card }: CardProps) {
  const dispatch = useDispatch();
  function handleLike(evt: MouseEvent<HTMLButtonElement>) {
    evt.stopPropagation();
    dispatch(setLike(card.id));
  }
  function handleRemove(evt: MouseEvent<HTMLButtonElement>) {
    evt.stopPropagation();
    dispatch(removeCard(card.id));
  }
  const title = card.title.substring(0, 35);
  const deleteClass = `${styles.button} ${styles.button_delete}`;
  const likeClass = card.like ?
    `${styles.button} ${styles.button_like_active}` :
    `${styles.button} ${styles.button_like_inactive}`;

  return (
    <li className={styles.card} onClick={()=>console.log('CLICK')}>
      <button className={deleteClass} onClick={handleRemove}></button>
      <button className={likeClass} onClick={handleLike}></button>
      <div className={styles.image} style={{ backgroundColor: card.color }}>
        <span className={styles.number}>{card.id}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{card.body}</p>
    </li>
  )
}