/**
 * Convert a JavaScript Date to a Protobuf Timestamp object
 * @param date JS Date object
 * @returns { seconds: number, nanos: number }
 */
export function dateToTimestamp(date: Date | string): {
  seconds: number;
  nanos: number;
} {
  const d = typeof date === 'string' ? new Date(date) : date;
  return {
    seconds: Math.floor(d.getTime() / 1000),
    nanos: d.getMilliseconds() * 1_000_000,
  };
}

/**
 * Convert a Protobuf Timestamp object to a JavaScript Date
 * @param timestamp { seconds: number; nanos: number }
 */
export function timestampToDate(timestamp: {
  seconds: number;
  nanos: number;
}): Date {
  return new Date(timestamp.seconds * 1000 + timestamp.nanos / 1_000_000);
}
