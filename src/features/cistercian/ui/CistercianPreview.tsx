import { useCallback, useRef } from "react";
import { CistercianSvg } from "./CistercianSvg";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { cn } from "@/shared/lib/utils";

type CistercianPreviewProps = {
  value: number | null;
  className?: string;
};

export const CistercianPreview = ({
  value,
  className,
}: CistercianPreviewProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const downloadSvg = useCallback(() => {
    if (value == null || !svgRef.current) return;
    const svg = svgRef.current;
    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const svgString = new XMLSerializer().serializeToString(clone);
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cistercian-${value}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }, [value]);

  return (
    <Card className={cn("ring-0 shadow-md h-80  ", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-foreground">
          Preview
        </CardTitle>
      </CardHeader>
      <CardContent className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4">
        {value != null ? (
          <>
            <div
              className="flex min-h-[140px] min-w-[120px] items-center justify-center rounded-lg border border-black bg-background p-6 dark:border-white"
              aria-hidden
            >
              <CistercianSvg
                ref={svgRef}
                value={value}
                className="h-auto w-28 max-w-full stroke-foreground sm:w-32"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={downloadSvg}
              aria-label={`Download Cistercian numeral for ${value} as SVG`}
            >
              Download SVG
            </Button>
          </>
        ) : (
          <p className="text-center text-sm text-muted-foreground">
            Enter a number between 1 and 9999.
          </p>
        )}
      </CardContent>
    </Card>
  );
};
