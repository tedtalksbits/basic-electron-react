import { useQuery } from '@tanstack/react-query';
import { AUTH_HEADER } from '../../../config';
import { Deck } from '../../../types/deck';
export const useGetDecks = (queries?: string) => {
  return useQuery({
    queryKey: ['decks'],
    queryFn: async () => {
      let url = import.meta.env.VITE_API_URL + '/decks?size=20';
      if (queries) {
        url += queries;
      }
      const response = await fetch(url, {
        method: 'GET',
        headers: AUTH_HEADER,
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        return data._embedded.decks as Deck[];
      } else throw new Error(response.status.toString());
    },
  });
};
