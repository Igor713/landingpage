import { SuccessModal } from '../successModal';
import { FailModal } from '../FailModal';
import Button from '../Button';
import Select from '../Select';
import { Loading } from '../Loading';

import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

import Styles from './contact.module.scss';

const Contact = () => {
  const [isLoading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFaiModal] = useState(false);

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
        // .matches(/^((d{2})s?)?(d{4,5}-d{4})$/, 'Digite um telefone válido')
        .required('Campo obrigatório'),
      website: Yup.string(),
      media: Yup.string(),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => handleSubmitForm(values),
  });

  const handleSubmitForm = (values) => {
    setLoading(true);
    axios
      .post('/api/sendEmail', {
        messageBody: `\n Nome: ${values.name},
          \n E-mail: ${values.email},
          \n Telefone: ${values.phone},
          \n Site: ${values.website},
          Midia: ${values.media}`,
      })
      .then(() => {
        setLoading(false);
        formik.resetForm();
        setSuccessModal(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setFaiModal(true);
      });
  };

  const closeModal = () => {
    setFaiModal(false);
    setSuccessModal(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      {successModal && <SuccessModal closeModal={closeModal} />}
      {failModal && <FailModal closeModal={closeModal} />}
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

          <form id={Styles.form} onSubmit={formik.handleSubmit}>
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
              placeholder="E-mail"
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
              id="media"
              name="media"
              placeholder="Orçamento para mída"
              options={optionsContent}
              value={formik.values.media}
              onChange={formik.handleChange}
            />

            <Button type={'submit'} title={'Enviar'} typeOfClass={'full'} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
