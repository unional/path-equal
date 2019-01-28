import t from 'assert'
import { detectPathFormat } from './detectPathFormat';

test('detects UNC format', () => {
  t.strictEqual(detectPathFormat('\\\\server\\drive\\some-path\\x.txt'), 'unc')
})
