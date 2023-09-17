export class Banner {
  description: string;
  title: string;
  url: string;
  imgHash: string;

  constructor({ description, title, imgHash: imgUrl, url }: Banner) {
    this.description = description;
    this.imgHash = imgUrl;
    this.title = title;
    this.url = url;
  }
}
