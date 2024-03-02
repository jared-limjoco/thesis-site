import styles from './styles.module.css';

export default function SolidButton({
  submit, children, className, onClick,
}) {
  return (
    <button type={submit ? 'submit' : 'button'} onClick={onClick} className={`${className || styles.buttonRed} ${styles.button}`}>{children}</button>
  );
}
