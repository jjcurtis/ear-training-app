import Rest from './Rest';
import Duration from '@/enums/Duration';
import Pitch from '@/enums/Pitch';

export default class Note extends Rest {
  private _pitch: Pitch;
  constructor(duration: Duration, pitch?: Pitch) {
    super(duration);
    this._pitch = pitch === undefined ? Pitch.C4 : pitch;
  }

  public get Pitch() {
    return this._pitch;
  }

  public set Pitch(v: Pitch) {
    this._pitch = v;
  }
}
