import {
  Button,
  Callout,
  Card,
  Divider,
  Text,
  TextInput,
  Title,
} from '@tremor/react';
import { useRef, useState } from 'react';
import { usePatchDeck, useDeleteDeck } from '../api';
import {
  ExclamationCircleIcon,
  PencilAltIcon,
  XCircleIcon,
} from '@heroicons/react/solid';
import { Deck } from '../../../types/deck';
import { DialogBox } from '../../../components/dialog';

export const DeckItem = ({ deck }: { deck: Deck }) => {
  const [patchDeckItem, setPatchDeckItem] = useState(deck);
  const { mutate: patchDeck } = usePatchDeck(deck.id);
  const { mutate: deleteDeck } = useDeleteDeck(deck.id);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);

  const handleSaveChanges = () => {
    patchDeck(patchDeckItem);
    setShowEditDialog(false);
  };

  const handleDeleteDeck = () => {
    deleteDeck();
    setShowDeleteDialog(false);
  };

  return (
    <div className='relative col-span-12 md:col-span-4'>
      <Card className='flex flex-col h-full'>
        <Title>{deck.name}</Title>
        <Text>{deck.description ?? 'No description added'}</Text>
        <div className='bottom  mt-auto'>
          <Divider />
          <div className='actions flex justify-between'>
            <span
              onClick={() => setShowEditDialog(true)}
              className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-200 hover:cursor-pointer'
            >
              <PencilAltIcon height={22} width={22} />
              <span>Edit</span>
            </span>
            <span className='text-sm font-medium text-gray-700'>
              {deck.visibility}
            </span>
            <span
              onClick={() => setShowDeleteDialog(true)}
              className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-200 hover:cursor-pointer'
            >
              <XCircleIcon height={22} width={22} />
              <span>Delete</span>
            </span>
          </div>
        </div>
      </Card>
      <DialogBox open={showEditDialog} onClose={() => setShowEditDialog(false)}>
        <Title>Edit Deck: {deck.name}</Title>
        <div className='input-group flex flex-col gap-1'>
          <label htmlFor='name'>
            <Text>Name</Text>
          </label>
          <TextInput
            value={patchDeckItem.name ?? ''}
            onChange={(e) =>
              setPatchDeckItem({ ...patchDeckItem, name: e.target.value })
            }
            name='name'
            id='name'
          />
        </div>
        <div className='input-group flex flex-col gap-1'>
          <label htmlFor='description'>
            <Text>Description</Text>
          </label>
          <TextInput
            value={patchDeckItem.description ?? ''}
            onChange={(e) =>
              setPatchDeckItem({
                ...patchDeckItem,
                description: e.target.value,
              })
            }
            name='description'
            id='description'
            placeholder='Something about this deck'
          />
        </div>
        <div className='flex items-center justify-between mt-auto'>
          <Button onClick={() => setShowEditDialog(false)}>Cancel</Button>
          <button className='btn btn-success' onClick={handleSaveChanges}>
            Save
          </button>
        </div>
      </DialogBox>
      <DialogBox
        open={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
      >
        <Callout
          title='Are you sure?'
          color='rose'
          icon={ExclamationCircleIcon}
        >
          Delete Deck: {deck.name}
        </Callout>
        <div className='flex items-center justify-between mt-auto'>
          <Button onClick={() => setShowDeleteDialog(false)}>Cancel</Button>
          <button className='btn btn-danger' onClick={handleDeleteDeck}>
            Delete
          </button>
        </div>
      </DialogBox>
    </div>
  );
};
