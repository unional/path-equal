
import { pathEqual } from '.'

test('path with same style passes', () => {
  expect(pathEqual('a', 'a')).toBe(true)
  expect(pathEqual('a/b', 'a/b')).toBe(true)
  expect(pathEqual('a\\b', 'a\\b')).toBe(true)
})

test('same style different value throws', () => {
  expect(pathEqual('a', 'b')).toBe(false)
})

test('UNIX style matches Windows style', () => {
  expect(pathEqual('a/b', 'a\\b')).toBe(true)
  expect(pathEqual('a/b/c', 'a\\b\\c')).toBe(true)
  expect(pathEqual('a\\b', 'a/b')).toBe(true)
  expect(pathEqual('a\\b\\c', 'a/b/c')).toBe(true)
})

// not supported yet
test(`/d/foo should match d:\\foo`)
