import axios from 'axios';
import Button from '../Button';
import Select from '../Select';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Styles from './contact.module.scss';
// import { Loading } from "../loading/index";
// import { SuccessModal } from "../successModal";
// import { FailModal } from "../failModal/index";

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
        .matches(
          // '/^(?d{2})?[s-]?[s9]?d{4}-?d{4}$/',
          'Digite um telefone válido',
        )
        .required('Campo obrigatório'),
      website: Yup.string(),
      media: Yup.string(),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => handleSubmitForm(values),
  });

  const handleSubmitForm = (values) => {
    console.log(values);
    axios
      .post('/api/sendEmail', {
        messageBody: `\n Nome: ${values.name}, 
          \n E-mail: ${values.email}, 
          \n Telefone: ${values.phone}, 
          \n Site: ${values.website}, 
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
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Celular/Whatsapp"
            required
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <input
            id="website"
            name="website"
            type="text"
            placeholder="Site"
            required
            value={formik.values.website}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <Select
            id="select"
            name="select"
            placeholder="Orçamento para mída"
            options={optionsContent}
            onBlur={formik.handleBlur}
            value={formik.values.media}
          />

          <Button type="submit" title={'Enviar'} typeOfClass={'full'} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
