type UpdateCurrentPlayerRequest = {
  song: number;
  album: number;
};

type UpdateToCollectionRequest = {
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
  UpdateToCollectionRequest,
  IncreasePLaysCountRequest
};
