import styles from './styles.module.css';

export default function OutlineButton({
  submit, children, className, onClick,
}) {
  return (
    <button type={submit ? 'submit' : 'button'} onClick={onClick} className={`${className || styles.buttonRed} ${styles.button}`}>{children}</button>
  );
}
