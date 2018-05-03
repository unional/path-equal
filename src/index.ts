export function pathEqual(actual: string, expected: string) {
  if (actual === expected) return true

  return normalizePath(actual) === normalizePath(expected)
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
