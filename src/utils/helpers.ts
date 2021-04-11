import { getItem } from './localStorage'
import { ApiData, Currency } from '../models/types'

export const isLatest = (): boolean => {
  const latest = getItem('latest') as ApiData
  if (!latest) {
    return false
  }
  const expires = new Date(latest?.date)
  const now = new Date()
  return now.getDay() < expires.getDay()
}

export const currencySelector = {
  [Currency.EUR]: 1,
  [Currency.GBP]: 1,
  [Currency.USD]: 1
  // etc trying to save time
}
