import { GET_EPISODE_BY_ID } from '@/api/queries';
import { useQuery } from '@apollo/client';
import Head from 'next/head';

export default function Home() {
  const { data } = useQuery(GET_EPISODE_BY_ID, {
    variables: {
      episodeId: 1,
    },
  });

  return (
    <div className="Home">
      <Head>
        <title>Main Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </div>
  );
}
