import { useGetDecks } from '../api/useGetDecks';
import { Navigate } from 'react-router-dom';
import { DeckList } from '../components';
import { Title } from '@tremor/react';

export const Decks = () => {
  const { data: decks, isLoading, isError, error } = useGetDecks();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Navigate to='/auth/login' />;
  }

  return (
    <div className='decks p-8 max-w-7xl mx-auto'>
      <Title className='mb-8'>Decks</Title>
      <DeckList decks={decks} />
    </div>
  );
};
