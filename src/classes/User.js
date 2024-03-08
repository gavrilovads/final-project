export default class User {
  constructor(email, password, role = "guest") {
    this.email = email;
    this.password = password;
    this.role = role;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
