import Rest from './Rest';
import Duration from '@/enums/Duration';

export default class Note extends Rest {
  private _pitch: number;
  constructor(duration: Duration, pitch: number) {
    super(duration);
    this._pitch = pitch;
  }

  public get Pitch() {
    return this._pitch;
  }

  public set Pitch(v: number) {
    this._pitch = v;
  }
}
