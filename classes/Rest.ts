import Duration from '@/enums/Duration';

export default class Rest {
  private _duration: Duration
;
  constructor(duration: Duration
  ) {
    this._duration = duration;
  }

  public get Duration() {
    return this._duration;
  }

  public set Duration(v: Duration
  ) {
    this._duration = v;
  }
}
