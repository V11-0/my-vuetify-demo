export class User {
  private _gender: string;
  private _name: string;
  private _username: string;
  private _email: string;
  private _picUrl: string;

  constructor(
    gender: string,
    name: string,
    username: string,
    email: string,
    picUrl: string
  ) {
    this._gender = gender;
    this._name = name;
    this._username = username;
    this._email = email;
    this._picUrl = picUrl;
  }

  get gender(): string {
    return this._gender;
  }

  get name(): string {
    return this._name;
  }

  get username(): string {
    return this._username;
  }

  get email(): string {
    return this._email;
  }

  get picUrl(): string {
    return this._picUrl;
  }
}
