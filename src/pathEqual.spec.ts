import t from 'assert'
import { pathEqual } from '.'

test('path with same style passes', () => {
  t(pathEqual('a', 'a'))
  t(pathEqual('a/b', 'a/b'))
  t(pathEqual('a\\b', 'a\\b'))
})

test('same style different value throws', () => {
  t.strictEqual(pathEqual('a', 'b'), false)
})

test('separator: \\ matches /', () => {
  t(pathEqual('a/b', 'a\\b'))
  t(pathEqual('a/b/c', 'a\\b\\c'))
  t(pathEqual('a\\b', 'a/b'))
  t(pathEqual('a\\b\\c', 'a/b/c'))
  t(pathEqual('a\\b\\c\\', 'a/b/c'))
})

test(`drive letter: /d/foo should match d:\\foo`, () => {
  t(pathEqual('/d/foo', 'd:\\foo'))
})

test(`with '.' (current dir)`, () => {
  t(pathEqual('./a', 'a'))
  t(pathEqual('a/b/.', 'a/b'))
  t(pathEqual('a/b/./', 'a/b'))
  t(pathEqual('a/b/./c', 'a/b/c'))
  t(pathEqual('a/b/./c/d/./e', 'a/b/c/d/e'))
})

test("with '..' (parent dir)", () => {
  t(pathEqual('a/../b', 'b'))
  t(pathEqual('a/b/../', 'a'))
  t(pathEqual('a/b/..', 'a'))
  t(pathEqual('a/ba/../c/../d', 'a/d'))
  t(pathEqual('../a', '../a'))
  t(pathEqual('../a/b/..', '../a'))
  t(pathEqual('m/h/d/c/../a/b/../../../..', 'm'))
  t(pathEqual('k/m/h/d/c/../a/b/../../../../..', 'k'))
  t(pathEqual('k/m/h/d/c/../a/b/../../../../h/d', 'k/m/h/d'))
  t(pathEqual('k\\m\\h\\d\\c\\..\\a\\b\\..\\..\\..\\..\\h\\d', 'k/m/h/d'))
})
