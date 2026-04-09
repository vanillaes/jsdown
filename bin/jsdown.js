#!/usr/bin/env node
import { createDocs } from '../src/index.js'
import { Command } from 'commander'
import { readPackageJSON } from '@vanillaes/esmtk'

const pkg = await readPackageJSON()
const program = new Command()
  .name('jsdown')
  .description('Markdown Doc Generator for JSDoc')
  .version(pkg.version, '-v, --version')

program
  .description('Generate markdown documentation from JSDoc types')
  .argument('[files]', 'file(s) to document', '**/!(index).js')
  .action((files, options) => {
    createDocs(files, options)
  })

program.parse(process.argv)
