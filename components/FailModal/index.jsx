import { FiXSquare } from 'react-icons/fi';
import Button from '../button';
import Styles from './failmodal.module.scss';

export const FailModal = ({ closeModal }) => {
  return (
    <div className={Styles.overlay} onClick={closeModal}>
      <div className={Styles.modalContainer}>
        <FiXSquare />
        <p>Não foi possível enviar no momento, tente novamente mais tarde.</p>
        <div className={Styles.okButtonContainer} onClick={closeModal}>
          <Button title="fechar" />
        </div>
      </div>
    </div>
  );
};
