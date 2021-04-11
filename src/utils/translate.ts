import vocabs from './vocabs'

/**
 * based on the provided key this method will return the text
 * associated with it.
 * the map is defined in vocabs.
 */
export default function translate (key?: string, ...values: Array<string | number>): string {
  if (!key) {
    return ''
  }

  const txt = vocabs[key]
  return txt
    ? values.reduce(
      (acc: string, v: string | number): string =>
        acc.replace('%s', v.toString()),
      txt
    )
    : `__${key}__`
}
