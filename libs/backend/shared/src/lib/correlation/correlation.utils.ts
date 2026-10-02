import { randomUUID } from 'node:crypto';

export function generateCorrelationId(): string {
  return randomUUID();
}

export function normalizeCorrelationId(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0]?.trim() || undefined;
  }

  return value?.trim() || undefined;
}
