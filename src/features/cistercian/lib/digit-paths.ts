/**
 * Cistercian digit paths from reference (100×100 canvas).
 * Index: [position][digit-1] = array of [x,y] (first = moveTo, rest = lineTo).
 * Position: 0=ones (top-right), 1=tens (top-left), 2=hundreds (bottom-right), 3=thousands (bottom-left).
 */
const REFERENCE_PATHS: ReadonlyArray<ReadonlyArray<ReadonlyArray<[number, number]>>> = [
  [
    /* ones 1-9 */
    [[50, 10], [70, 10]],
    [[50, 30], [70, 30]],
    [[50, 10], [70, 30]],
    [[50, 30], [70, 10]],
    [[50, 10], [70, 10], [50, 30]],
    [[70, 10], [70, 30]],
    [[50, 10], [70, 10], [70, 30]],
    [[50, 30], [70, 30], [70, 10]],
    [[50, 10], [70, 10], [70, 30], [50, 30]],
  ],
  [
    /* tens 10-90 */
    [[50, 10], [30, 10]],
    [[50, 30], [30, 30]],
    [[50, 10], [30, 30]],
    [[50, 30], [30, 10]],
    [[50, 10], [30, 10], [50, 30]],
    [[30, 10], [30, 30]],
    [[50, 10], [30, 10], [30, 30]],
    [[50, 30], [30, 30], [30, 10]],
    [[50, 10], [30, 10], [30, 30], [50, 30]],
  ],
  [
    /* hundreds 100-900 */
    [[50, 90], [70, 90]],
    [[50, 70], [70, 70]],
    [[50, 90], [70, 70]],
    [[50, 70], [70, 90]],
    [[50, 90], [70, 90], [50, 70]],
    [[70, 90], [70, 70]],
    [[50, 90], [70, 90], [70, 70]],
    [[50, 70], [70, 70], [70, 90]],
    [[50, 90], [70, 90], [70, 70], [50, 70]],
  ],
  [
    /* thousands 1000-9000 */
    [[50, 90], [30, 90]],
    [[50, 70], [30, 70]],
    [[50, 90], [30, 70]],
    [[50, 70], [30, 90]],
    [[50, 90], [30, 90], [50, 70]],
    [[30, 90], [30, 70]],
    [[50, 90], [30, 90], [30, 70]],
    [[50, 70], [30, 70], [30, 90]],
    [[50, 90], [30, 90], [30, 70], [50, 70]],
  ],
]

/** Map reference canvas 100×100 to SVG viewBox 0 0 40 60 */
const SCALE_X = 40 / 100
const SCALE_Y = 60 / 100

const toSvg = (x: number, y: number): [number, number] => [
  Math.round(x * SCALE_X * 100) / 100,
  Math.round(y * SCALE_Y * 100) / 100,
]

export const getPathDForDigit = (position: number, digit: number): string | null => {
  if (digit < 1 || digit > 9 || position < 0 || position > 3) return null
  const points = REFERENCE_PATHS[position][digit - 1]
  if (!points.length) return null
  const [first, ...rest] = points.map(([x, y]) => toSvg(x, y))
  const M = `M ${first[0]} ${first[1]}`
  const L = rest.map(([x, y]) => `L ${x} ${y}`).join(" ")
  return `${M} ${L}`.trim()
}

/** Stave: ref (50,10) to (50,90) -> SVG (20,6) to (20,54) */
export const STAVE_PATH = `M ${20} ${6} L ${20} ${54}`
export const VIEWBOX = "0 0 40 60"
