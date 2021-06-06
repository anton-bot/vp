import { lang } from '@/lang/lang';
import { Episode } from '@/types/Episode';
import styles from './EpisodeBriefInfo.module.scss';

type Props = {
  data: Episode;
  showCharacters?: boolean;
};

export const EpisodeBriefInfo: React.FC<Props> = (props) => {
  const text = lang().episode;

  return (
    <div className={styles.episode}>
      <div className={styles.name}>{props.data.name}</div>
      <div className={styles.metadata}>
        {props.data.air_date} | {props.data.episode}
      </div>
      {props.showCharacters && (
        <div className={styles.characters}>
          <h3>{text.characters}</h3>
          <ul>
            {props.data.characters.map((c) => (
              <li key={c.id}>{c.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
