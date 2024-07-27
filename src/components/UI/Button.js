import styles from './Button.module.css';

const Button = (props) => {
  const { children, disabled = false } = props;
  return (
    <button {...props} disabled={disabled} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
