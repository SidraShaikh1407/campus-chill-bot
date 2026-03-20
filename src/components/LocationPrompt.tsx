import { MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocationPromptProps {
  onRequest: () => void;
  loading: boolean;
  error: string | null;
}

const LocationPrompt = ({ onRequest, loading, error }: LocationPromptProps) => {
  return (
    <div className="animate-fade-up stagger-3 mx-auto max-w-md px-4 py-8 text-center">
      <div className="rounded-2xl border bg-card p-8 shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <MapPin className="h-7 w-7 text-primary" />
        </div>
        <h2 className="mb-2 text-lg font-semibold text-card-foreground">
          Enable your location
        </h2>
        <p className="mb-6 text-sm text-muted-foreground" style={{ textWrap: "pretty" }}>
          We'll use your GPS to find real hangout spots nearby — cafés, parks, restaurants & malls within walking distance.
        </p>
        <Button
          onClick={onRequest}
          disabled={loading}
          className="w-full active:scale-[0.97]"
          size="lg"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Getting location…
            </>
          ) : (
            <>
              <MapPin className="mr-2 h-4 w-4" />
              Share my location
            </>
          )}
        </Button>
        {error && (
          <p className="mt-4 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default LocationPrompt;
