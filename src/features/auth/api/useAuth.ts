import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

export function useAuthAPI() {
  const queryClient = useQueryClient();
  const loginFn = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      const response = await fetch(
        import.meta.env.VITE_API_URL + '/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        }
      );
      console.log(response);
      if (response.ok) return await response.json();
      else throw new Error(response.status.toString());
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['auth']);
    },
  });

  const useWhoAmI = () => {
    return useQuery({
      queryKey: ['auth'],
      queryFn: async () => {
        const response = await fetch(
          import.meta.env.VITE_API_URL + '/auth/me',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${Cookies.get('token')}` || '',
            },
          }
        );
        console.log(response);
        if (response.ok) return await response.json();
        else throw new Error(response.status.toString());
      },
    });
  };

  return {
    loginFn,
    useWhoAmI,
  };
}
