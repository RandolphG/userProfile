export function subtractDaysFromDateNow(days: number) {
  const date = new Date();
  return new Date(date.setDate(date.getDate() - Math.floor(days)));
}

export function subtractMonthsFromDateNow(months: number = 12) {
  const date = new Date();
  return new Date(date.setMonth(date.getMonth() - Math.floor(months)));
}

export function dateToTimestampSeconds(date: Date) {
  return Math.floor(date.getTime() / 1000);
}

export function currentDateToSeconds() {
  return Math.floor(Date.now() / 1000);
}

export function timestampToIsoDate(timestamp: number) {
  const date = new Date(timestamp * 1000);
  return date.toISOString();
}

export function getRandomSecondsBetween(min = 1, max = 10) {
  const rand = Math.floor(Math.random() * (max - min)) + min;
  return rand * 999;
}
