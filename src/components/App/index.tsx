import styles from './App.module.css';
import { useDispatch } from '../../services/store';
import { useEffect } from 'react';
import { fetchPosts } from '../../services/slice';
import { useSelector } from '../../services/store';
import { selectCards } from '../../services/slice';
import Card from '../Card';

export default function App() {

  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector(selectCards);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Кричащее название</h1>
        <p className={styles.slogan}>Сдержанное описание произвольной длины</p>
      </header>
      <ul className={styles.cardList}>
        {cards.map(card =>
          <Card key={card.id} card={card} />
        )}
      </ul>
    </div>
  );
}