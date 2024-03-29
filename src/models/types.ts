export enum Currency {
  GBP = 'GBP',
  HKD = 'HKD',
  IDR = 'IDR',
  ILS = 'ILS',
  DKK = 'DKK',
  INR = 'INR',
  CHF = 'CHF',
  MXN = 'MXN',
  CZK = 'CZK',
  SGD = 'SGD',
  THB = 'THB',
  HRK = 'HRK',
  MYR = 'MYR',
  NOK = 'NOK',
  CNY = 'CNY',
  BGN = 'BGN',
  PHP = 'PHP',
  SEK = 'SEK',
  PLN = 'PLN',
  ZAR = 'ZAR',
  CAD = 'CAD',
  ISK = 'ISK',
  BRL = 'BRL',
  RON = 'RON',
  NZD = 'NZD',
  TRY = 'TRY',
  JPY = 'JPY',
  RUB = 'RUB',
  KRW = 'KRW',
  USD = 'USD',
  HUF = 'HUF',
  AUD = 'AUD',
  EUR = 'EUR'
}

export interface ApiData {
  base: Currency
  rates: Record<Currency, number>
  date: string
}
