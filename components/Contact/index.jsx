import Button from '../Button';
import Styles from './contact.module.scss';

const Contact = () => {
  return (
    <div className={Styles.contactContainer}>
      <div className={Styles.presentationWrapper}>
        <span className={Styles.presentationWarn}>ENTRE EM CONTATO</span>
        <h1 className={Styles.presentationTitle}>
          Aumente seu resultado de vendas e performance
        </h1>
        <p className={Styles.presentationDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>

      <div className={Styles.formWrapper}>
        <h1 className={Styles.formTitle}>Fale com um especialista</h1>

        <form action="">
          <input type="text" name="" id="" placeholder="Nome completo" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="text" name="" id="" placeholder="Celular/Whatsapp" />
          <input type="text" name="" id="" placeholder="Site" />
          <input type="text" name="" id="" placeholder="Orçamento para mídia" />

          <Button title={'Enviar'} typeOf={'primary'} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
