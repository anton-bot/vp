import { Character } from './Character';

export type Episode = {
  id: string;
  air_date: string;
  characters: Character[];
  episode: string;
  name: string;
};
