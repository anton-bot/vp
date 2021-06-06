import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Spinner.module.scss';

export const Spinner: React.FC = () => (
  <div className={styles.centered}>
    <Loader type="Circles" color="#00b0c8" height={40} width={40} />
  </div>
);
