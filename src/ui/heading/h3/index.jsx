import styles from './styles.module.css';

export default function H3({ children, className }) {
  return (
    <h3 className={`${styles.h3} ${className}`}>{children}</h3>
  );
}
