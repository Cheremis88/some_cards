import { TCard } from '../../utils/types';
import { useDispatch } from '../../services/store';
import { setLike, removeCard } from '../../services/slice';
import Modal from '../Modal';
import styles from './Card.module.css';
import { MouseEvent, useState } from 'react';
import ModalCard from '../ModalCard';

type CardProps = {
  card: TCard;
}

export default function Card({ card }: CardProps) {

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const title = card.title.substring(0, 35);
  const deleteClass = `${styles.button} ${styles.button_delete}`;
  const likeClass = card.like ?
    `${styles.button} ${styles.button_like_active}` :
    `${styles.button} ${styles.button_like_inactive}`;

  function openModal() {
    setIsOpen(true);
    document.body.classList.add('scroll_lock');
  }

  function closeModal() {
    setIsOpen(false);
    document.body.classList.remove('scroll_lock');
  }

  function handleLike(evt: MouseEvent<HTMLButtonElement>) {
    evt.stopPropagation();
    dispatch(setLike(card.id));
  }

  function handleRemove(evt: MouseEvent<HTMLButtonElement>) {
    evt.stopPropagation();
    dispatch(removeCard(card.id));
  }

  return (
    <>
      <li className={styles.card} onClick={openModal}>
        <button className={deleteClass} onClick={handleRemove}></button>
        <button className={likeClass} onClick={handleLike}></button>
        <div className={styles.image} style={{ backgroundColor: card.color }}>
          <span className={styles.number}>{card.id}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{card.body}</p>
      </li>
      {
        isOpen &&
        <Modal onClick={closeModal}>
          <ModalCard color={card.color} title={card.title} body={card.body} />
        </Modal>
      }
    </>
  )
}