export function getStorage(key) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : []
}

export function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

const STORAGE_KEY = "favorites";

export function getFavorites() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveFavorites(favorites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}