import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AUTH_HEADER } from '../../../config';
import { Deck } from '../../../types/deck';
export const useAddDeck = () => {
  console.log('useAddDeck');
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (deck: Deck) => {
      const response = await fetch(import.meta.env.VITE_API_URL + '/decks', {
        method: 'POST',
        headers: AUTH_HEADER,
        body: JSON.stringify(deck),
      });
      console.log(response);
      if (response.ok) return await response.json();
      else throw new Error(response.status.toString());
    },
    mutationKey: ['decks'],
    onSuccess: () => {
      queryClient.invalidateQueries(['decks']);
    },
  });
};
