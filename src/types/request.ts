type UpdateCurrentPlayerRequest = {
  song: number;
  album: number;
};

type AddToCollectionRequest = {
  albums: {
    id: number;
  }[];
};

type IncreasePLaysCountRequest = {
  data: {
    plays: number;
  };
};

export type {
  UpdateCurrentPlayerRequest,
  AddToCollectionRequest,
  IncreasePLaysCountRequest
};
