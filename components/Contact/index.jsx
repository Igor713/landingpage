import axios from 'axios';
import Button from '../Button';
import Select from '../Select';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Styles from './contact.module.scss';

const Contact = () => {
  const optionsContent = [
    { label: 'Instagram', value: 'instagram' },
    { label: 'Facebook', value: 'facebook' },
    { label: 'Tiktok', value: 'tiktok' },
  ];

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      website: '',
      media: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      phone: Yup.string()
        .matches('', 'Digite um telefone válido')
        .required('Campo obrigatório'),
      website: Yup.string(),
      media: Yup.string(),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => handleSubmitForm(values),
  });

  const handleSubmitForm = (values) => {
    axios
      .post('/api/senEmail', {
        messageBody: `\n Nome: ${values.name}, 
          \n E-mail: ${values.email}, 
          \n Telefone: ${values.phone}, 
          \n Site: ${values.site}, 
          Midia: ${values.media}`,
      })
      .then(() => console.log('True'))
      .catch(() => console.log('False'));
  };

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

        <form className={Styles.form} onSubmit={formik.handleSubmit}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome completo"
            required
            onBlur={formik.handleBlur}
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            onBlur={formik.handleBlur}
          />
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Celular/Whatsapp"
            required
            onBlur={formik.handleBlur}
          />
          <input
            id="website"
            name="website"
            type="text"
            placeholder="Site"
            required
            onBlur={formik.handleBlur}
          />
          <Select
            id="select"
            name="select"
            placeholder="Orçamento para mída"
            options={optionsContent}
            required
            onBlur={formik.handleBlur}
          />

          <Button title={'Enviar'} type="submit" typeOf={'full'} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
