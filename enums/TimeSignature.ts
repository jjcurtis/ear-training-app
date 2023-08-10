import { multiplier } from "./Duration";

enum TimeSignature {
  FourFour = 4/4 * multiplier,
  ThreeFour = 3/4 * multiplier,
  TwoFour = 2/4 * multiplier,
  SixEight = 6/8 * multiplier,
}

export default TimeSignature;