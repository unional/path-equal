import { expect, it } from '@jest/globals'
import { pathEqual } from './index.js'

it('exports pathEqual()', () => {
	expect(typeof pathEqual).toBe('function')
})
