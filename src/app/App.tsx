import { useCallback, useState } from "react";
import { CistercianForm } from "@/features/cistercian/ui/CistercianForm";
import { CistercianPreview } from "@/features/cistercian/ui/CistercianPreview";

function App() {
  const [value, setValue] = useState<number | null>(1234);

  const handleValueChange = useCallback((n: number | null) => {
    setValue(n);
  }, []);

  return (
    <div className="min-h-svh bg-muted/40">
      <div className="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-8 sm:px-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cistercian numerals
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter a number from 1 to 9999 to see its Cistercian numeral.
          </p>
        </header>
        <main className="flex w-full md:w-96 mx-auto  flex-col items-center gap-10">
          <section className="w-full">
            <CistercianForm onValueChange={handleValueChange} />
          </section>
          <section className="w-full">
            <CistercianPreview value={value} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
