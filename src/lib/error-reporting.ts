/**
 * Lightweight client-side error reporting hook.
 * Safe no-op outside environments that inject a global reporter.
 */
export function reportClientError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  console.error("[Synergy]", message, context, error instanceof Error ? error.stack : undefined);
}
