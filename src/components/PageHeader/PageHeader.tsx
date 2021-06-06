import styles from './PageHeader.module.scss';

export const PageHeader: React.FC = (props) => (
  <h1 className={styles.PageHeader}>{props.children}</h1>
);
