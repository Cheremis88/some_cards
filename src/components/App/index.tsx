import styles from './App.module.css';
import { useDispatch } from '../../services/store';
import { useEffect } from 'react';
import { fetchPosts } from '../../services/slice';
import { useSelector } from '../../services/store';
import { selectCards } from '../../services/slice';

export default function App() {
  const dispatch = useDispatch();
  const {cards, loading, error} = useSelector(selectCards);
  console.log('render')
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Сдержанное название</h1>
        <p className={styles.slogan}>Кричащее описание произвольной длины</p>
      </header>
      {loading && <p>ЗАГРУЗКА</p>}
      {error && <p>{error}</p>}
      <ul>
        {cards.map(item => <li key={item.id} style={{color: item.color}}><h2>{item.title}</h2><p>{item.body}</p></li>)}
      </ul>
    </div>
  );
}