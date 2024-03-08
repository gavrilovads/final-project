export default class Video {
  constructor(guestId, title, description, thumbnailUrl, videoUrl) {
    this.guestId = guestId;
    this.title = title;
    this.description = description;
    this.thumbnailUrl = thumbnailUrl;
    this.videoUrl = videoUrl;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
