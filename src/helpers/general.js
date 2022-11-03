export function getPercentageChange(value) {
  return round((value - 1) * 100);
}

export function round(number, decimals = 2) {
  return Math.round(number * 10 ** decimals) / 10 ** decimals;
}

export function RoundSmallValue(price) {
  if (price < 0.0001) return Math.round(price * 10 ** 8) / 10 ** 8 + '';
  if (price < 0.01) return Math.round(price * 10 ** 6) / 10 ** 6 + '';
  return (Math.round(price * 10 ** 2) / 10 ** 2).toFixed(2);
}

export function roundLargeValue(cap) {
  if (cap > 10000000000) return round(cap / 1000000000000) + ' T';
  if (cap > 100000000) return round(cap / 1000000000) + ' B';
  if (cap > 1000000) return round(cap / 1000000) + ' M';
  if (cap > 10000) return round(cap / 1000) + ' K';
  return round(cap);
}

export function truncateString(string, maxLength) {
  if (!maxLength) return string;
  if (string.length <= maxLength) return string;

  return string.slice(0, maxLength - 3) + '...';
}

export function compareObjBy(a, b, key, isAscending) {
  // const { key, isAscending = true } = this;
  if (isAscending) return a[key] - b[key];
  if (!isAscending) return b[key] - a[key];
}

export function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function saveToLocalStorage(key, item) {
  return localStorage.setItem(key, JSON.stringify(item));
}

export function convertToPercentage(value) {
  return round(value * 100);
}

export function trimUnderscoresAndSpaces(str) {
  return str.replaceAll('_', '').replaceAll(' ', '');
}

export function allowOnlyNumber(value) {
  const matchingValue = value.match(/(?:\d+(?:\.\d*)?|\.\d+)/);
  if (matchingValue) return matchingValue[0];
}
