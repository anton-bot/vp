import { Language } from '@/types/Language';
import enHk from './data/en-HK.json';

const HARDCODED_LANGUAGE = Language.English;

export const lang = () => languages[HARDCODED_LANGUAGE];

const languages: Record<Language, typeof enHk> = {
  [Language.English]: enHk,
};
