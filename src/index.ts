export function pathEqual(actual: string, expected: string) {
  if (actual === expected) return true

  const normalizedActual = actual.replace(/\\/g, '/')
  const normalizedExpected = expected.replace(/\\/g, '/')
  return normalizedActual === normalizedExpected
}
