import { expect, it } from '@jest/globals'
import { basename } from 'path'

it('is func', () => {
	expect(typeof basename).toBe('function')
})
