# path-equal

![unstable][unstable-image]
[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

[![Circle CI][circleci-image]][circleci-url]
[![Travis CI][travis-image]][travis-url]
[![Codecov][codecov-image]][codecov-url]
[![Coveralls Status][coveralls-image]][coveralls-url]

[![Greenkeeper][greenkeeper-image]][greenkeeper-url]
[![Semantic Release][semantic-release-image]][semantic-release-url]

[![Visual Studio Code][vscode-image]][vscode-url]
[![Wallaby.js][wallaby-image]][wallaby-url]

File paths in Unix and Windows are different.
During test, sometimes we want to compare if the file paths are the same.

Doing this comparison can get unwieldy.
But not doing it would means the project can only be develop in specific platform.

This library provides this comparison to check if the two paths are the same,
regardless of the running platform.

```ts
import pathEqual from 'path-equal'

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

[circleci-image]: https://circleci.com/gh/unional/path-equal/tree/master.svg?style=shield
[circleci-url]: https://circleci.com/gh/unional/path-equal/tree/master
[codecov-image]: https://codecov.io/gh/unional/path-equal/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/unional/path-equal
[coveralls-image]: https://coveralls.io/repos/github/unional/path-equal/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/unional/path-equal?branch=master
[downloads-image]: https://img.shields.io/npm/dm/path-equal.svg?style=flat
[downloads-url]: https://npmjs.org/package/path-equal
[greenkeeper-image]: https://badges.greenkeeper.io/unional/path-equal.svg
[greenkeeper-url]: https://greenkeeper.io/
[npm-image]: https://img.shields.io/npm/v/path-equal.svg?style=flat
[npm-url]: https://npmjs.org/package/path-equal
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[travis-image]: https://img.shields.io/travis/unional/path-equal/master.svg?style=flat
[travis-url]: https://travis-ci.org/unional/path-equal?branch=master
[unstable-image]: https://img.shields.io/badge/stability-unstable-yellow.svg
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
[wallaby-image]: https://img.shields.io/badge/wallaby.js-configured-green.svg
[wallaby-url]: https://wallabyjs.com
