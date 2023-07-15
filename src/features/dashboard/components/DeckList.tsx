import { DeckItem } from '.';
import { Deck } from '../../../types/deck';
import { AddDeckItem } from './AddDeckItem';

export const DeckList = ({ decks }: { decks: Deck[] }) => {
  return (
    <div className='grid grid-cols-12 gap-4'>
      {decks?.map((deck: Deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
      <AddDeckItem />
    </div>
  );
};
