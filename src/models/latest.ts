import api from '../utils/api'
import { getItem, setItem } from '../utils/localStorage'
import { ApiData, Currency } from '../models/types'

export const latest = async (base: Currency): Promise<ApiData> => {
  let currencies
  try {
    const cached = getItem(`@latest-${base}`) as ApiData
    if (cached !== null) {
      const now = new Date()
      if (now.toISOString().substr(0, 10) === cached.date) {
        currencies = cached
      }
    }
    if (!currencies) {
      currencies = await api.get(`api/latest?base=${base}`)
      setItem(`@latest-${base}`, JSON.stringify(currencies))
    }
    return currencies
  } catch (error) {
    throw new Error(error)
  }
}
