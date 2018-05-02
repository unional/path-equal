export function pathEqual(actual: string, expected: string) {
  if (actual === expected) return true

  const normalizedActual = normalizePath(actual)
  const normalizedExpected = normalizePath(expected)
  return normalizedActual === normalizedExpected
}

function normalizePath(value: string) {
  return value.replace(/\\/g, '/')
    .replace(/(\w):/, '/$1')
    .replace(/(\w)\/\.\.\/?/g, '')
    .replace(/^\.\//, '')
    .replace(/\/\.\//, '/')
    .replace(/\/\.$/, '')
    .replace(/\/$/, '')
}
