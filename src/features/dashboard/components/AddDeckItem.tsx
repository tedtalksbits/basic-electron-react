import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/solid';
import { Button, Card, Text, TextInput, Title } from '@tremor/react';
import { useAddDeck } from '../api/';
import { useRef, useState } from 'react';
import { Deck } from '../../../types/deck';
import { DialogBox } from '../../../components/dialog';
export const AddDeckItem = () => {
  const [showNewDeckDialog, setShowNewDeckDialog] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [newDeck, setNewDeck] = useState<Partial<Deck>>({
    name: '',
    description: '',
    visibility: 'public',
    userId: 4,
    tags: tags.toString(),
  });

  const { mutate: addDeck } = useAddDeck();

  const handleSaveChanges = () => {
    addDeck(newDeck as Deck);
    setShowNewDeckDialog(false);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLImageElement>) => {
    const element = e.target as HTMLInputElement;

    if (element.value !== '') {
      setTags([...tags, element.value]);
      element.value = '';
    }
  };

  const handleRemoveTag = (index: number) => () => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <>
      <Card
        className='col-span-12 md:col-span-4 cursor-pointer hover:bg-white/10 transition duration-300 ease-in-out group'
        onClick={() => setShowNewDeckDialog(true)}
      >
        <div className='flex flex-col h-full justify-center items-center'>
          <span className='group-hover:visible group-hover:opacity-100 group-hover:-translate-y-2 invisible opacity-0 translate-y-0 transition duration-300 delay-100 ease-in-out'>
            New Deck
          </span>
          <PlusCircleIcon className='h-12 w-12 text-gray-100 group-hover:text-gray-500 transition duration-300 ease-in-out' />
        </div>
      </Card>
      <DialogBox
        open={showNewDeckDialog}
        onClose={() => setShowNewDeckDialog(false)}
      >
        <Title>Add New Deck</Title>
        <div className='input-group'>
          <label htmlFor='newDeckName'>
            <Text>Deck Name</Text>
          </label>
          <TextInput
            placeholder='Deck Name'
            value={newDeck.name}
            name='newDeckName'
            id='newDeckName'
            onChange={(e) => setNewDeck({ ...newDeck, name: e.target.value })}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='newDeckDescription'>
            <Text>Deck Description</Text>
          </label>
          <TextInput
            placeholder='Deck Description'
            value={newDeck.description ?? ''}
            name='newDeckDescription'
            id='newDeckDescription'
            onChange={(e) =>
              setNewDeck({
                ...newDeck,
                description: e.target.value,
              })
            }
          />
        </div>
        <div className='input-group-row'>
          <label htmlFor='newDeckVisibility'>
            <Text>Visibility</Text>
          </label>
          <input
            type='checkbox'
            name='newDeckVisibility'
            id='newDeckVisibility'
            checked={newDeck.visibility === 'public'}
            onChange={(e) =>
              setNewDeck({
                ...newDeck,
                visibility: e.target.checked ? 'public' : 'private',
              })
            }
          />
        </div>
        <div
          className={`tags gap-3 p-2 border rounded-md ${
            tags.length > 0 ? 'flex' : 'hidden'
          }`}
        >
          {tags.map((tag, i) => (
            <span
              key={tag}
              className='bg-gray-700 p-1 rounded-md relative text-xs'
            >
              <button
                className='absolute -top-3 -right-3'
                onClick={handleRemoveTag(i)}
              >
                <XCircleIcon className='h-5 w-5 text-rose' />
              </button>
              {tag}
            </span>
          ))}
        </div>
        <div className='input-group'>
          <label htmlFor='newTags'>
            <Text>Tags</Text>
          </label>
          <TextInput
            name='newTags'
            placeholder='tags'
            id='newTags'
            onKeyDown={(e) =>
              e.key === 'Enter' &&
              handleAddTag(
                e as unknown as React.KeyboardEvent<HTMLImageElement>
              )
            }
            onBlur={(e) =>
              handleAddTag(
                e as unknown as React.KeyboardEvent<HTMLImageElement>
              )
            }
          />
        </div>
        <div className='flex items-center justify-between mt-10'>
          <Button onClick={() => setShowNewDeckDialog(false)}>Cancel</Button>
          <button className='btn btn-success' onClick={handleSaveChanges}>
            Save
          </button>
        </div>
      </DialogBox>
    </>
  );
};
