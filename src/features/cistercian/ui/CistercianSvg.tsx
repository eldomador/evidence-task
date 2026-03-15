import { forwardRef, useMemo } from "react";
import { getPathDForDigit, STAVE_PATH, VIEWBOX } from "../lib/digit-paths";
import { numberToDigits } from "../lib/number-to-digits";

type CistercianSvgProps = {
  value: number;
  className?: string;
  "aria-hidden"?: boolean;
};

export const CistercianSvg = forwardRef<SVGSVGElement, CistercianSvgProps>(
  ({ value, className, "aria-hidden": ariaHidden }, ref) => {
    const digits = useMemo(() => numberToDigits(value), [value]);

    const paths = useMemo(() => {
      const out: Array<{ position: number; d: string }> = [];
      // digits = [thousands, hundreds, tens, ones]; quadrants: 0=ones, 1=tens, 2=hundreds, 3=thousands
      digits.forEach((d, arrayIndex) => {
        if (d === 0) return;
        const quadrantIndex = 3 - arrayIndex;
        const pathD = getPathDForDigit(quadrantIndex, d);
        if (pathD) out.push({ position: quadrantIndex, d: pathD });
      });
      return out;
    }, [digits]);

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={VIEWBOX}
        role="img"
        aria-hidden={ariaHidden}
        focusable={false}
        className={className}
        stroke="currentColor"
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <title>Cistercian numeral for {value}</title>
        <desc>Cistercian numeral representing the number {value}</desc>
        <path d={STAVE_PATH} />
        {paths.map(({ d }, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    );
  },
);
CistercianSvg.displayName = "CistercianSvg";
