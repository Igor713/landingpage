import Button from '../Button';
import Styles from './welcome.module.scss';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className={Styles.welcomeContainer}>
      <div className={Styles.welcomeWrapper}>
        <div className={Styles.welcomePresentation}>
          <h1 className={Styles.presentationTitle}>
            Melhor agência de marketing do bairro
          </h1>
          <p className={Styles.presentationDescription}>
            Somos uma agência de performance digital, aceleramos vendas e
            aquisição de leads para grandes marcas.
          </p>
          <Button title="Aumentar vendas" typeOf="secondary" />
        </div>

        <div className={Styles.welcomeInformation}>
          <div className={Styles.informationWrapper}>
            <div className={Styles.informationTitle}>
              <h2 className={Styles.title}>Leads</h2>
              <p className={Styles.descrition}>
                Pessoas impactadas pela campanha que converteram em cadastros.
              </p>
              <div className={Styles.statsWrapper}>
                <div className={Styles.statesIcon}>
                  <Image src="" alt="Leads Icon" />
                </div>
                <div className={Styles.statesValue}>10.102</div>
              </div>
            </div>

            <div className={Styles.percentage}>
              <span>&uarr; 43%</span>
            </div>
          </div>

          <div className={Styles.cardFooter}>
            <div className={Styles.cardFooterTitle}>Vendas</div>
            <div className={Styles.cardFooterItem}>
              <div className={Styles.icon}>
                <Image src="" alt="Sales Icon" />
              </div>
              <div className={Styles.value}>1.923</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
