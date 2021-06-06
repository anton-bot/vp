import styles from './MenuBar.module.scss';
import Link from 'next/link';

export const MenuBar: React.FC = () => (
  <div className={styles.menubar}>
    <Link href="/">
      <img src="/img/Rick_and_Morty_logo.png" alt="" width={200} />
    </Link>
  </div>
);
