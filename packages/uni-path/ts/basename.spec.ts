import { basename } from 'node:path'
import { expect, it } from '@jest/globals'

it('is func', () => {
	expect(typeof basename).toBe('function')
})
