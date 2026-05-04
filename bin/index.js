#!/usr/bin/env node
import { createDocs } from '../src/index.js'
import { Command } from 'commander'
import { Package } from '@vanillaes/esmtk'

const pkg = new Package()
const program = new Command()
  .name('jsdown')
  .version(pkg.version, '-v, --version')
  .usage(`jsdown [...options] [files...]
    If [files...] is omitted, all JavaScript source files (**/*.js)
    in the current working directory are converted, recursively.

    Certain paths (node_modules/, coverage/, vendor/, *.min.js, *.spec.js,
    hidden files) are automatically ignored.

    Paths in a project's .gitignore file are also automatically ignored.
  `)
  .description('Markdown Documentation Generator for JSDoc')
  .argument('[files]', 'file(s) to document', '**/!(index).js')
  .action((files, options) => {
    createDocs(files, options)
  })

program.parse(process.argv)
