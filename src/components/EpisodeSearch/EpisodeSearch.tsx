import { GET_EPISODE_BY_ID } from '@/api/queries';
import { lang } from '@/lang/lang';
import { Episode } from '@/types/Episode';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Spinner } from '../Spinner/Spinner';
import { EpisodeBriefInfo } from '../EpisodeBriefInfo/EpisodeBriefInfo';
import styles from './EpisodeSearch.module.scss';

export const EpisodeSearch: React.FC = (props) => {
  const [episodeId, setEpisodeId] = useState('');
  const [episodeNoText, setEpisodeNoText] = useState('');
  const text = lang().search;

  const { loading, error, data } = useQuery<{ episodesByIds: Episode[] }>(
    GET_EPISODE_BY_ID,
    {
      variables: {
        episodeId,
      },
      skip: !episodeId,
    },
  );

  return (
    <div>
      <div className={styles.searchbar}>
        <input
          placeholder={text.form.episodeNo.placeholder}
          onChange={(e) => setEpisodeNoText(e.currentTarget.value)}
        />
        <Button onClick={() => setEpisodeId(episodeNoText)}>
          {text.buttons.find}
        </Button>
      </div>
      <div className={styles.searchresults}>
        {loading && <Spinner />}
        {error && <ErrorMessage>{text.messages.loadfailed}</ErrorMessage>}
        {data?.episodesByIds?.map((e) => (
          <EpisodeBriefInfo key={e.episode} data={e} />
        ))}
      </div>
    </div>
  );
};
