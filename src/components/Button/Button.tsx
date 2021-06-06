import styles from './Button.module.scss';

type Props = {
  onClick: () => void;
};

export const Button: React.FC<Props> = (props) => (
  <button type="button" className={styles.regular} onClick={props.onClick}>
    {props.children}
  </button>
);
