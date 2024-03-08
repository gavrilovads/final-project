export default class RSVP {
  constructor(guestId, status = 0) {
    this.guestId = guestId;
    this.status = status;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
