import Styles from './loading.module.scss';

export const Loading = () => (
  <div className={Styles.overlay}>
    <div className={Styles.loading} />
  </div>
);
