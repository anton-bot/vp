import { Episode } from '@/types/Episode';
import styles from './EpisodeBriefInfo.module.scss';

type Props = {
  data: Episode;
};

export const EpisodeBriefInfo: React.FC<Props> = (props) => {
  return (
    <div className={styles.episode}>
      <div className={styles.name}>{props.data.name}</div>
      <div className={styles.metadata}>
        {props.data.air_date} | {props.data.episode}
      </div>
    </div>
  );
};
