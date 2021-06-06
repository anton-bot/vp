import { lang } from '@/lang/lang';
import Head from 'next/head';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { EpisodeSearch } from '../components/EpisodeSearch/EpisodeSearch';

export default function Home() {
  const text = lang();

  return (
    <div className="Home screen">
      <Head>
        <title>
          {text.app} — {text.search.title}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader>{text.search.title}</PageHeader>
      <EpisodeSearch />
    </div>
  );
}
