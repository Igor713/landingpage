import Styles from './button.module.scss';

const Button = ({ title, typeOf }) => {
  return (
    <button className={`${Styles.button} ${Styles[typeOf]}`}>{title}</button>
  );
};

export default Button;
