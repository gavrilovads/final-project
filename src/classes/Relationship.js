export default class Relationship {
  constructor(name) {
    this.name = name;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
