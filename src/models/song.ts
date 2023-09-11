export interface Song {
  artists: string[];
  duration: number;
  id: number;
  name: string;
  media: Media;
}

interface Media {
  id: number;
  url: string;
}
