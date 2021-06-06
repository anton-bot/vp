import { GET_EPISODE_BY_ID } from '@/api/queries';
import { EpisodeBriefInfo } from '@/components/EpisodeBriefInfo/EpisodeBriefInfo';
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';
import { Spinner } from '@/components/Spinner/Spinner';
import { lang } from '@/lang/lang';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { PageHeader } from '../../components/PageHeader/PageHeader';

export default function Home() {
  const text = lang();
  const router = useRouter();
  const { episodeId } = router.query;

  const { loading, error, data } = useQuery(GET_EPISODE_BY_ID, {
    variables: {
      episodeId,
    },
  });

  const episode = data?.episodesByIds?.[0];

  return (
    <div className="Episode screen">
      <Head>
        <title>
          {text.app} — {text.episode.title}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader>{text.episode.title}</PageHeader>
      {loading && <Spinner />}
      {error && <ErrorMessage>{text.episode.messages.loadfailed}</ErrorMessage>}
      {episode && <EpisodeBriefInfo data={episode} showCharacters={true} />}
    </div>
  );
}
