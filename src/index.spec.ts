import t from 'assert'

import { pathEqual } from '.'

test('path with same style passes', () => {
  t(pathEqual('a', 'a'))
  t(pathEqual('a/b', 'a/b'))
  t(pathEqual('a\\b', 'a\\b'))
})

test('same style different value throws', () => {
  t.equal(pathEqual('a', 'b'), false)
})

test('UNIX style matches Windows style', () => {
  t(pathEqual('a/b', 'a\\b'))
  t(pathEqual('a/b/c', 'a\\b\\c'))
  t(pathEqual('a\\b', 'a/b'))
  t(pathEqual('a\\b\\c', 'a/b/c'))
})

test(`/d/foo should match d:\\foo`, () => {
  expect(pathEqual('/d/foo', 'd:\\foo')).toBe(true)
})

test(`with '.' (current dir)`, () => {
  t(pathEqual('./a', 'a'))
  t(pathEqual('a/b/.', 'a/b'))
  t(pathEqual('a/b/./', 'a/b'))
  t(pathEqual('a/b/./c', 'a/b/c'))
})

test(`with '..' (parent dir)`, () => {
  t(pathEqual('a/../b', 'b'))
  t(pathEqual('a/b/../', 'a'))
  t(pathEqual('a/b/..', 'a'))
  t(pathEqual('a/b/../c/../d', 'a/d'))
  t(pathEqual('../a', '../a'))
  t(pathEqual('../a/b/..', '../a'))
})
