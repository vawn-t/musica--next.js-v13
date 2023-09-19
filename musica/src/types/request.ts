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

type SyncRecentlyPlayedAlbum = {
  data: {
    recentlyPlayedAt: string;
  };
};

export type {
  UpdateCurrentPlayerRequest,
  UpdateToCollectionRequest,
  IncreasePLaysCountRequest,
  SyncRecentlyPlayedAlbum
};
