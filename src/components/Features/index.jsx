import Styles from './features.module.scss';
import Card from '../Card';

const Features = () => {
  return (
    <div className={Styles.featuresContainer}>
      <div className={Styles.featuresWrapper}>
        <h1 className={Styles.featuresTitle}>
          Neste bairro, não há agência melhor. Garantimos.
        </h1>
        <p className={Styles.featuresDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Card />
      </div>
    </div>
  );
};

export default Features;
