import Image from 'next/image';
import Button from '../Button';
import Styles from './welcome.module.scss';
import WelcomeStatistic from '../../public/images/welcome-statistic.svg';

const Welcome = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.text}>
        <h1>Melhor agência de marketing do bairro</h1>
        <p>
          Somos uma agência de performance digital, aceleramos vendas e
          aquisição de leads para grandes marcas.
        </p>
        <Button title="Aumentar vendas" typeOf="secondary" />
      </div>
      <div className={Styles.image}>
        <Image src={WelcomeStatistic} alt="Estatística" />
      </div>
    </div>
  );
};

export default Welcome;
