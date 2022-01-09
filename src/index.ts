export interface PercentageOptions {
  /**
   * Number of decimals to show after the
   *
   * Defaults to 2
   */
  decimals?: number;

  /**
   * Should the percentage sign be appended to the value?
   *
   * Defaults to `true`
   */
  sign?: boolean;
}

/**
 * Turn the number into a percentage
 *
 * @param absolute  the value (between 0 and 1) to become a percentage
 * @param decimals  the number of decimals to show
 */
export function toPercentage(absolute: number, options?: PercentageOptions): string {
  const decimals = options?.decimals ?? toPercentage.DEFAULT_OPTIONS.decimals;
  const sign = options?.sign ?? toPercentage.DEFAULT_OPTIONS.sign;

  if (!Number.isFinite(absolute)) return `? ${absolute.toString()}`;

  // absolute into percentage
  const percentage = 100 * absolute;

  // cut-off trailing decimals & round to desired decimals
  // const rounded = Math.round(percentage * (10 ** decimals)) / (10 ** decimals);
  const rounded = toPercentage.round(percentage, decimals);

  // left of decimal
  // round of floating point errors
  const left = toPercentage.floatingFloor(rounded);

  // no decimals
  if (decimals <= 0) {
    const result = (left.toLocaleString('en-US') || '0').padStart(2, ' ') + (sign ? '%' : '');
    return result;
  }

  // right of decimal
  const remainder = rounded - left;
  // bump decimals to the right of "." & round off floating point errors
  const right = toPercentage.floatingFloor(toPercentage.increaseOrder(remainder, decimals));

  const formatted = left.toLocaleString('en-US').padStart(2, ' ')
    + '.'
    + right.toString().padStart(decimals, '0')
    + (sign ? '%' : '');

  return formatted;
}

export namespace toPercentage {
  /**
   * Default options for {@link toPercentage}
   */
  export const DEFAULT_OPTIONS: Required<PercentageOptions> = {
    decimals: 2,
    sign: true,
  };

  /**
   * Shift the decimal point to the right
   *
   * @param value   number to shift
   * @param right   places to shift right by (increases numer's size)
   */
  export function increaseOrder(value: number, right: number): number {
    const result = value * (10 ** right);
    return result;
  }

  /**
   * Round to the given number of decimals
   *
   * @param value           value to trim decimals from
   * @param keepDecimals    the numer of decimals to keep
   * @returns               the number rounded to the given decimals
   */
  export function round(value: number, keepDecimals: number): number {
    const left = increaseOrder(value, keepDecimals);
    const heightened = Math.round(left);
    const flattened = increaseOrder(heightened, -keepDecimals);
    return flattened;
  }

  /**
   * Get the safe floor of a floating point number
   *
   * @param number
   * @returns
   */
  export function floatingFloor(number: number): number {
    const result = Math.floor(number + 1e-9);
    return result;
  }
}
