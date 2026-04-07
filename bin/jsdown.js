#!/usr/bin/env node
import { createDocs } from '../src/index.js'
import { Command } from 'commander'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const pkg = require('../package.json')

const program = new Command()
  .name('jsdown')
  .description('Markdown Doc Generator for JSDoc')
  .version(pkg.version, '-v, --version')

program
  .description('Lint file(s) matching the provided pattern (default *.spec.js)')
  .argument('[files]', 'file(s) to lint', '**/!(*.spec|index).js')
  .action((files, options) => {
    createDocs(files, options)
  })

program.parse(process.argv)
