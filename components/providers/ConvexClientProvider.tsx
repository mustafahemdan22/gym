"use client";

import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  console.error(
    "Error: NEXT_PUBLIC_CONVEX_URL is not defined.\n" +
    "If running locally, please run 'npx convex dev'.\n" +
    "If in production, ensure the environment variable is set in your hosting provider."
  );
}

const convex = new ConvexReactClient(convexUrl || "https://placeholder-url.convex.cloud");

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
