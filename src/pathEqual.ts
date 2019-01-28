export function pathEqual(actual: string, expected: string) {
  if (actual === expected) return true

  return normalizePath(actual) === normalizePath(expected)
}

function normalizePath(value: string) {
  return value.replace(/\\/g, '/')
    .replace(/(\w):/, '/$1')
    .replace(/(\w+)\/\.\.\/?/g, '')
    .replace(/(\w+)\/\.\.\/?/g, '')
    .replace(/(\w+)\/\.\.\/?/g, '') // just lazy right now to support '../../..'
    .replace(/^\.\//, '')
    .replace(/\/\.\//, '/')
    .replace(/\/\.$/, '')
    .replace(/\/$/, '')
}
