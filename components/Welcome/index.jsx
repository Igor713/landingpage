import Button from '../Button';
import Styles from './welcome.module.scss';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className={Styles.welcomeContainer}>
      <div className={Styles.welcomeWrapper}>
        <div className={Styles.welcomePresentation}>
          <h1 className={Styles.welcomeTitle}>
            Melhor agência de marketing do bairro
          </h1>
          <p className={Styles.welcomeDescription}>
            Somos uma agência de performance digital, aceleramos vendas e
            aquisição de leads para grandes marcas.
          </p>
          <Button title="Aumentar vendas" typeOf="secondary" />
        </div>

        <div className={Styles.welcomeInformation}>
          <div className={Styles.cardContent}>
            <div className={Styles.header}>
              <h2>Leads</h2>
              <div className={Styles.percentage}>
                <span>&uarr; 43%</span>
              </div>
            </div>
            <p>
              Pessoas impactadas pela campanha que converteram em cadastros.
            </p>
            <div className={Styles.stats}>
              <div className={Styles.statItem}>
                <div className={Styles.icon}>
                  <Image src="" alt="Leads Icon" />
                </div>
                <div className={Styles.value}>10.102</div>
              </div>
            </div>
          </div>
          <div className={Styles.cardFooter}>
            <div className={Styles.footerItem}>
              <div className={Styles.icon}>
                <Image src="" alt="Sales Icon" />
              </div>
              <div className={Styles.label}>Vendas</div>
              <div className={Styles.value}>1.923</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
