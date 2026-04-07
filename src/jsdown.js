import { docdown } from './index.js'
import { fileExists, match } from '@vanillaes/esmtk'
import { mkdir, writeFile } from 'node:fs/promises'
import { basename, dirname, join } from 'node:path'

/**
 * Create markdown documents for the JS + JSDoc sources
 * @param {string} files the pattern(s) of file(s) to include
 * @param {object} options 'jsdown' options
 */
export async function createDocs (files, options = {}) {
  const sources = await match(files)
  sources.forEach(file => createDoc(file))
}

/**
 * Create a markdown document for a JS + JSDoc source
 * @private
 * @param {string} path path to JS source
 */
async function createDoc (path) {
  // extract names
  const dir = dirname(path)
  const file = basename(path)
  const name = basename(path, '.js')
  const mdName = `${name}.md`

  const srcPath = join(process.cwd(), 'src') // TODO: make this configurable?
  const docPath = join(process.cwd(), 'docs') // TODO: make this configurable?

  const exists = await !fileExists(docPath)
  if (!exists) {
    await mkdir(docPath, { recursive: true })
  }

  // build the docdown config
  const config = {
    title: `${dir}.${name}`,
    toc: 'none',
    tocHref: '',
    tocLink: '',
    path: join(srcPath, file),
    sourceLink: '',
    style: 'github',
    url: 'https://github.com/vanillaes/absurdum/doc/README.md' // TODO: look up project name
  }

  // create the markdown file
  const markdown = docdown(config)
  await writeFile(join(docPath, mdName), markdown, { flag: 'w+' }, (err) => {
    if (err) {
      throw Error(err)
    }
  })
}
