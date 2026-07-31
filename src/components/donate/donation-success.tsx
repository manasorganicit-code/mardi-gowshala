"use client";

import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AUTO_DISMISS_MS = 6000;

export function DonationSuccess({ onDismiss }: { onDismiss: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle2 className="size-10 text-success" />
        <h2 className="font-heading text-xl">Thank You</h2>
        <p className="text-sm text-muted-foreground">
          Your donation has been received. A confirmation has been recorded
          against your details.
        </p>
      </CardContent>
    </Card>
  );
}