import { pathEqual } from './index.js'

test('path with same style passes', () => {
	expect(pathEqual('a', 'a')).toBe(true)
	expect(pathEqual('a/b', 'a/b')).toBe(true)
	expect(pathEqual('a\\b', 'a\\b')).toBe(true)
})

test('same style different value fails', () => {
	expect(pathEqual('a', 'b')).toBe(false)
})

test('separator: \\ matches /', () => {
	expect(pathEqual('a/b', 'a\\b')).toBe(true)
	expect(pathEqual('a/b/c', 'a\\b\\c')).toBe(true)
	expect(pathEqual('a\\b', 'a/b')).toBe(true)
	expect(pathEqual('a\\b\\c', 'a/b/c')).toBe(true)
	expect(pathEqual('a\\b\\c\\', 'a/b/c')).toBe(true)
})

test(`drive letter: /d/foo should match d:\\foo`, () => {
	expect(pathEqual('/d/foo', 'd:\\foo')).toBe(true)
})

test(`with '.' (current dir)`, () => {
	expect(pathEqual('./a', 'a')).toBe(true)
	expect(pathEqual('a/b/.', 'a/b')).toBe(true)
	expect(pathEqual('a/b/./', 'a/b')).toBe(true)
	expect(pathEqual('a/b/./c', 'a/b/c')).toBe(true)
	expect(pathEqual('a/b/./c/d/./e', 'a/b/c/d/e')).toBe(true)
})

test(`with '..' (parent dir)`, () => {
	expect(pathEqual('a/../b', 'b')).toBe(true)
	expect(pathEqual('a/b/../', 'a')).toBe(true)
	expect(pathEqual('a/b/..', 'a')).toBe(true)
	expect(pathEqual('a/ba/../c/../d', 'a/d')).toBe(true)
	expect(pathEqual('../a', '../a')).toBe(true)
	expect(pathEqual('../a/b/..', '../a')).toBe(true)
	expect(pathEqual('m/h/d/c/../a/b/../../../..', 'm')).toBe(true)
	expect(pathEqual('k/m/h/d/c/../a/b/../../../../..', 'k')).toBe(true)
	expect(pathEqual('k/m/h/d/c/../a/b/../../../../h/d', 'k/m/h/d')).toBe(true)
	expect(pathEqual('k\\m\\h\\d\\c\\..\\a\\b\\..\\..\\..\\..\\h\\d', 'k/m/h/d')).toBe(true)
})
