import styles from './styles.module.css';

export default function H1({ children, className }) {
  return (
    <h1 className={`${styles.h1} ${className}`}>{children}</h1>
  );
}
