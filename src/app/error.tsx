'use client';

import { Button } from "@/components/ui/button";

export default function error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div>

      <h1 className="text-red-500">{error.message}</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}
