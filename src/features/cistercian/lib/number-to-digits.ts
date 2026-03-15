/**
 * Splits a number 1–9999 into four digits: [thousands, hundreds, tens, ones].
 * Zero-padded from the left (e.g. 42 → [0, 0, 4, 2]).
 */
export const numberToDigits = (n: number): [number, number, number, number] => {
  const s = String(Math.max(0, Math.min(9999, Math.floor(n)))).padStart(4, "0");
  return [Number(s[0]), Number(s[1]), Number(s[2]), Number(s[3])];
};

export type DigitPosition = "ones" | "tens" | "hundreds" | "thousands";
