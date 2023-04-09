<div align="center">

# Better Strip BOM

![node-current](https://img.shields.io/node/v/better-strip-bom)
![npm](https://img.shields.io/npm/v/better-strip-bom)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Release](https://github.com/oblakstudio/better-strip-bom/actions/workflows/release.yml/badge.svg)](https://github.com/oblakstudio/better-strip-bom/actions/workflows/release.yml)

![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/oblakstudio/better-strip-bom)
![Scrutinizer coverage (GitHub/BitBucket)](https://img.shields.io/scrutinizer/coverage/g/oblakstudio/better-strip-bom/master)

</div>

> Strip UTF-8 [byte order mark](https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8) (BOM) from a string

From Wikipedia:

> The Unicode Standard permits the BOM in UTF-8, but does not require nor recommend its use. Byte order has no meaning in UTF-8.

## Install

```bash
$ npm install better-strip-bom
```
## Usage

### For strings

```ts
import { stripBom } from 'better-strip-bom';

stripBom('\uFEFFMagic Man, Magic Hands');
//=> 'Magic Man, Magic Hands'
```

### For Buffers

```ts
import { stripBom } from 'better-strip-bom';
import { readFileSync } from 'fs';

stripBom(readFileSync('magic.txt'));
//=> 'Magic Man, Magic Hands'
```
