import styles from './ErrorMessage.module.scss';

export const ErrorMessage: React.FC = (props) => (
  <div className={styles.crimson}>{props.children}</div>
);
