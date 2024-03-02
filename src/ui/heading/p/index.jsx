import styles from './styles.module.css';

export default function P({ children, className }) {
  return (
    <p className={`${styles.p} ${className}`}>{children}</p>
  );
}
