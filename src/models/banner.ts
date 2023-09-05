export class Banner {
  background: string;
  description: string;
  title: string;
  url: string;
  imgUrl: string;

  constructor({ description, title, imgUrl, url, background }: Banner) {
    this.background = background;
    this.description = description;
    this.imgUrl = imgUrl;
    this.title = title;
    this.url = url;
  }
}
