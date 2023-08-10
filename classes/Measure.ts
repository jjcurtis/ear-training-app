import TimeSignature from '@/enums/TimeSignature';
import Note from './Note';
import Rest from './Rest';

export default class Measure {
  constructor(timeSignature: TimeSignature) {
    this._remainder = timeSignature;
  }

  private _remainder: TimeSignature;
  private _storedValues: (Note | Rest)[] = [];

  public get Remainder(): number {
    if (this._storedValues.length === 0) return this._remainder;
    
    return (
      this._remainder -
      this._storedValues
        .map(value => value.Duration)
        .reduce((total, sum) => total + sum)
    );
  }

  public get StoredValues(): (Note | Rest)[] {
    return this._storedValues;
  }

  public InsertValue(value: Note | Rest): void {
    if (this.Remainder - value.Duration >= 0) {
      this._storedValues.push(value);
    }
  }

  public CanInsertValue(value: Note | Rest): boolean {
    if (this.Remainder - value.Duration < 0) {
      return false
    }
    return true;
  }
}
