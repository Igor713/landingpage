import Styles from './button.module.scss';

const Button = ({ title, typeOf }) => {
  return (
    <button
      className={`${Styles.button} ${typeOf === 'primary' ? Styles.primary : Styles.secondary}`}
    >
      {title}
    </button>
  );
};

export default Button;
