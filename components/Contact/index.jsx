import Button from '../Button';
import Select from '../Select';
import Styles from './contact.module.scss';

const Contact = () => {
  const optionsContent = [
    { label: 'Instagram', value: 'instagram' },
    { label: 'Facebook', value: 'facebook' },
    { label: 'Tiktok', value: 'tiktok' },
  ];

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
          <input type="text" placeholder="Nome completo" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Celular/Whatsapp" required />
          <input type="text" placeholder="Site" required />
          <Select
            placeholder="Orçamento para mída"
            options={optionsContent}
            required
          />

          <Button title={'Enviar'} typeOf={'full'} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
