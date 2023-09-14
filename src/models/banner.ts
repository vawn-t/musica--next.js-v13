export class Banner {
  description: string;
  title: string;
  url: string;
  imgUrl: string;

  constructor({ description, title, imgUrl, url }: Banner) {
    this.description = description;
    this.imgUrl = imgUrl;
    this.title = title;
    this.url = url;
  }
}
