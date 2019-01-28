import t from 'assert'
import { detectPathFormat } from './detectPathFormat';

test('detects UNC format', () => {
  t.strictEqual(detectPathFormat('\\\\server\\drive\\some-path\\x.txt'), 'unc')
})

test('detects Windows path', () => {
  t.strictEqual(detectPathFormat('C:\\a\\x.txt'), 'windows')
  t.strictEqual(detectPathFormat('a\\x.txt'), 'windows')
})
