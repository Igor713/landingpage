import Styles from './card.module.scss';

const Card = ({ title, typeOf }) => {
  return (
    <button
      className={`${Styles.button} ${typeOf === 'primary' ? Styles.primary : Styles.secondary}`}
    >
      {title}
    </button>
  );
};

export default Card;
