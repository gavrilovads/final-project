export default class Guest {
  constructor(
    email,
    code,
    firstName,
    lastName,
    plusOne = false,
    plusOneName = "",
    numberOfChildren,
    isOutOfTown = false,
    requiresAccommodation = false,
    relationship = null,
    videoUploaded = false,
    videoPath = "",
    rsvp = null,
    registryItem = null,
    isProfileCompleted = false
  ) {
    this.email = email;
    this.code = code;
    this.firstName = firstName;
    this.lastName = lastName;
    this.plusOne = plusOne;
    this.plusOneName = plusOneName;
    this.numberOfChildren = numberOfChildren;
    this.isOutOfTown = isOutOfTown;
    this.requiresAccommodation = requiresAccommodation;
    this.relationship = relationship;
    this.videoUploaded = videoUploaded;
    this.videoPath = videoPath;
    this.rsvp = rsvp;
    this.registryItem = registryItem;
    this.isProfileCompleted = isProfileCompleted;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
