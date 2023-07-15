export type Deck = {
  readonly id: number;
  userId: number;
  name: string;
  description?: string;
  tags?: string;
  image?: string;
  visibility?: 'public' | 'private' | 'unlisted';
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly _links?: {
    readonly self?: {
      readonly href?: string;
    };
    readonly flashcard?: {
      readonly href?: string;
    };
  };
};

export type DeckDTO = {
  name: string;
  description: string;
  tags: string;
  image: string;
  visibility: string;
};
