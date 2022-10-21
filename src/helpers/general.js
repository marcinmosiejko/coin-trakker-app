export function getPercentageChange(value) {
  return (value - 1) * 100;
}

export function round(number, decimals = 2) {
  return Math.round(number * 10 ** decimals) / 10 ** decimals;
}

export function roundPrice(price) {
  if (price < 0.0001) return Math.round(price * 10 ** 8) / 10 ** 8 + '';
  if (price < 0.01) return Math.round(price * 10 ** 6) / 10 ** 6 + '';
  return (Math.round(price * 10 ** 2) / 10 ** 2).toFixed(2);
}

export function roundMarketCapAndVol(cap) {
  if (cap > 100000000) return round(cap / 1000000000) + ' B';
  if (cap > 100000) return round(cap / 1000000) + ' M';
  if (cap > 1000) return round(cap / 1000) + ' K';
  return cap;
}

export function truncateString(string, desiredLength) {
  if (string.length <= desiredLength) return string;

  return string.slice(0, desiredLength - 3) + '...';
}

export function compareObjBy(a, b) {
  return a[this] - b[this];
}

export function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function saveToLocalStorage(key, item) {
  return localStorage.setItem(key, JSON.stringify(item));
}
