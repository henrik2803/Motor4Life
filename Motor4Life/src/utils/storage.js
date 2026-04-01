export function getStorage(key) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : []
}

export function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}