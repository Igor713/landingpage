import Styles from './button.module.scss';

const Button = ({ title, type, typeOf, onClick }) => {
  return (
    <button
      className={`${Styles.button} ${Styles[typeOf]}`}
      type={type}
      onClick={onClick()}
    >
      {title}
    </button>
  );
};

export default Button;
