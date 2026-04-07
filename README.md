<p align="center"><strong>✓  NOTICE: This project is currently a WIP  ✓</strong></p>

<h1 align="center">JSDown</h1>

<div align="center">📜  Markdown Documentation Generator for JSDoc  📜</div>

<br />

<div align="center">
  <a href="https://github.com/vanillaes/jsdown/releases"><img src="https://badgen.net/github/tag/vanillaes/jsdown?cache-control=no-cache" alt="GitHub Release"></a>
  <a href="https://www.npmjs.com/package/@vanillaes/jsdown"><img src="https://badgen.net/npm/v/@vanillaes/jsdown?icon=npm" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/@vanillaes/jsdown"><img src="https://badgen.net/npm/dm/@vanillaes/jsdown?icon=npm" alt="NPM Downloads"></a>
  <a href="https://github.com/vanillaes/jsdown/actions"><img src="https://github.com/vanillaes/jsdown/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillaes/jsdown/actions"><img src="https://github.com/vanillaes/jsdown/workflows/Release/badge.svg" alt="Release Status"></a>
</div>

## Features

- **No Configuration**
- Feed it JSDoc types and it spits out Markdown

## jsdown

### Arguments

`jsdown [...options] [files...]`

- `[files]` - File(s) to lint (default `**/!(*.spec|index).js`)

### Usage

```sh
# generate documentation
jsdown

```sh
# generate documentation (matching a different file(s))
lint-es '**/!(*.spec|index).cjs'
```

*Note: In Linux/OSX, matcher patterns must be delimited in quotes.*
