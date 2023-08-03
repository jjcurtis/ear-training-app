import TimeSignature from '@/enums/TimeSignature';
import Note from './Note';
import Rest from './Rest';

export default class Measure {
  constructor(timeSignature: TimeSignature) {
    this.remainder = timeSignature;
  }

  remainder: TimeSignature;
  private _storedValues: (Note | Rest)[] = [];

  public get Remainder(): number {
    return (
      this.remainder -
      this._storedValues
        .map(value => value.Duration)
        .reduce((total, sum) => total + sum)
    );
  }

  public get StoredValues(): (Note | Rest)[] {
    return this._storedValues;
  }

  public InsertValue(value: Note | Rest): void {
    if (this.Remainder - value.Duration > 0) {
      this._storedValues.push(value);
    }
  }
}
