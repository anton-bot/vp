import { gql } from '@apollo/client';

export const GET_EPISODE_BY_ID = gql`
  query GetEpisodeById($episodeId: ID!) {
    episodesByIds(ids: [$episodeId]) {
      id
      name
      air_date
      episode
      characters {
        id
        name
      }
    }
  }
`;
