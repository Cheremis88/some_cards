import { ReactNode } from "react";
import styles from './Modal.module.css';

type ModalProps = {
  children: ReactNode;
  onClick: () => void;
}

export default function Modal({ children, onClick }: ModalProps) {
  return (
    <div className={styles.modal} onClick={onClick}>
      <div className={styles.content} onClick={evt => evt.stopPropagation()}>
        <button className={styles.button} onClick={onClick} />
        {children}
      </div>
    </div>
  )
}