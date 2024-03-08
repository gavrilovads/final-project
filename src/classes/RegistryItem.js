export default class RegistryItem {
  constructor(
    name,
    description = "",
    link = "",
    image = "",
    guestId = null,
    isReserved = false
  ) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.image = image;
    this.guestId = guestId;
    this.isReserved = isReserved;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
