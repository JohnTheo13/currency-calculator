export const getItem = (item: string): unknown => {
  const stored = localStorage.getItem(item)
  if (!stored) return stored
  return stored.slice(0, 1) === '{' || stored.slice(0, 1) === '['
    ? JSON.parse(stored)
    : stored
}

export const setItem = (itemKey: string, item: unknown): void => {
  if (typeof item === 'string') {
    localStorage.setItem(itemKey, item)
  } else {
    localStorage.setItem(itemKey, JSON.stringify(item))
  }
}
