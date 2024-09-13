import Styles from './button.module.scss';

const Button = ({ title, type, typeOfClass }) => {
  return (
    <button type={type} className={`${Styles.button} ${Styles[typeOfClass]}`}>
      {title}
    </button>
  );
};

export default Button;
