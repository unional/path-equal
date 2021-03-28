# path-equal

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][npm-url]

[![Github NodeJS][github-nodejs]][github-action-url]
[![Codacy Grade][codacy-grade]][codacy-url]
[![Codacy Coverage][codacy-coverage]][codacy-url]
[![Codecov][codecov-image]][codecov-url]

[![Semantic Release][semantic-release-image]][semantic-release-url]

[![Visual Studio Code][vscode-image]][vscode-url]

File paths in Unix and Windows are different.
During test, sometimes we want to compare if the file paths are the same.

Doing this comparison can get unwieldy.
But not doing it would means the project can only be develop in specific platform.

This library provides this comparison to check if the two paths are the same,
regardless of the running platform.

```ts
import { pathEqual } from 'path-equal'

pathEqual('dir/sub-dir/file.txt', 'dir\\sub-dir\\file.txt') // true
```

This library will not access the file system,
so comparing absolute path with relative path will fail.

## Contribute

```sh
# after fork and clone
npm install

# begin making changes
git checkout -b <branch>
npm run watch

# after making change(s)
git commit -m "<commit message>"
git push

# create PR
```

[codacy-grade]: https://app.codacy.com/project/badge/Grade/197fc8889591484fbfa7218938669471
[codacy-coverage]: https://app.codacy.com/project/badge/Coverage/197fc8889591484fbfa7218938669471
[codacy-url]: https://www.codacy.com/gh/unional/path-equal/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=unional/path-equal
[codecov-image]: https://codecov.io/gh/unional/path-equal/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/unional/path-equal
[downloads-image]: https://img.shields.io/npm/dm/path-equal.svg?style=flat
[github-nodejs]: https://github.com/unional/path-equal/workflows/nodejs/badge.svg
[github-action-url]: https://github.com/unional/path-equal/actions
[npm-image]: https://img.shields.io/npm/v/path-equal.svg?style=flat
[npm-url]: https://npmjs.org/package/path-equal
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
