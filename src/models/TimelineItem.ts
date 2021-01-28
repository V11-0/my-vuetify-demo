export class TimelineItem {
  private _year: number;
  private _color: string;

  constructor(year: number, color: string) {
    this._year = year;
    this._color = color;
  }

  get year(): number {
    return this._year;
  }

  get color(): string {
    return this._color;
  }
}
