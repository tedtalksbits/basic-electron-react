import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AUTH_HEADER } from '../../../config';
export const useDeleteDeck = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await fetch(
        import.meta.env.VITE_API_URL + '/decks/' + id,
        {
          method: 'DELETE',
          headers: AUTH_HEADER,
        }
      );
      console.log(response);
      if (response.ok) return await response.json();
      else throw new Error(response.status.toString());
    },
    mutationKey: ['decks', id],
    onSuccess: () => {
      queryClient.invalidateQueries(['decks']);
    },
  });
};
