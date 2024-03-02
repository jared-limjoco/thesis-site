import styles from './styles.module.css';

export default function H2({ children, className }) {
  return (
    <h2 className={`${styles.h2} ${className}`}>{children}</h2>
  );
}
