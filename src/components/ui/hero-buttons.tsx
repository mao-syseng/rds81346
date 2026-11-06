"use client";

import { Button } from "./button";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button size="lg" className="rounded-lg font-semibold text-base px-8 py-3 h-auto">
        <a href="https://sec-hub.com/#request-demo">Get started today</a>
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="rounded-lg font-semibold text-base px-8 py-3 h-auto"
      >
        <a href="https://app.sec-hub.com">Log in</a>
      </Button>
    </div>
  );
}
