export const multiplier = 100;

enum Duration {
  Whole = 1 * multiplier,
  DottedHalf = 3/4 * multiplier,
  Half = 1/2 * multiplier,
  DottedQuarter = 3/8 * multiplier,
  Quarter = 1/4 * multiplier,
  QuarterTriplet = 1/6 * multiplier,
  Eighth = 1/8 * multiplier,
  EighthTriplet = 1/12 * multiplier,
  Sixteenth = 1/16 * multiplier,
  SixteenthTriplet = 1/24 * multiplier,
}

export default Duration;