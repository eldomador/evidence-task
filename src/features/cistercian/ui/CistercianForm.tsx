import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import {
  cistercianFormSchema,
  type CistercianFormValues,
} from "@/shared/schemas/cistercian-form";

type CistercianFormProps = {
  onValueChange: (value: number | null) => void;
};

export const CistercianForm = ({ onValueChange }: CistercianFormProps) => {
  const form = useForm<CistercianFormValues>({
    resolver: zodResolver(cistercianFormSchema),
    defaultValues: { number: 1234 },
    mode: "onChange",
  });

  const watched = useWatch({ control: form.control, name: "number" });

  useEffect(() => {
    const num = Number(watched);
    if (watched === undefined || Number.isNaN(num)) {
      onValueChange(null);
      return;
    }
    const result = cistercianFormSchema.safeParse({ number: num });
    if (result.success) onValueChange(result.data.number);
    else onValueChange(null);
  }, [watched, onValueChange]);

  return (
    <form className="flex flex-col gap-4 " onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-2">
        <Label htmlFor="number">Number (1–9999)</Label>
        <Input
          id="number"
          type="number"
          min={1}
          max={9999}
          step={1}
          placeholder="e.g. 1234"
          aria-invalid={!!form.formState.errors.number}
          {...form.register("number", {
            setValueAs: (v) =>
              v === "" || v === undefined ? undefined : Number(v),
          })}
        />
        <div className="min-h-5">
          {form.formState.errors.number && (
            <p className="text-sm text-destructive" role="alert">
              {form.formState.errors.number.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
};
