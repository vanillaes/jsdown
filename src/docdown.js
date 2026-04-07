import { generateDoc } from './index.js'
import { readFileSync } from 'node:fs'
import { basename } from 'node:path'
import _ from 'lodash-es'

/**
 * Generates Markdown documentation based on JSDoc comments.
 * @param {object} options The options object.
 * @param {string} options.path The input file path.
 * @param {string} options.url The source URL.
 * @param {string} [options.lang] The language indicator for code blocks (default: `js`).
 * @param {boolean} [options.sort] Specify whether entries are sorted (default: `true`).
 * @param {string} [options.style] The hash style for links ('default' or 'github').
 * @param {string} [options.title] The documentation title (default: `${path} API documentation`).
 * @param {string} [options.toc] The table of contents organization style ('categories' or 'properties').
 * @returns {string} The generated Markdown code.
 */
export function docdown (options) {
  options = _.defaults(options, {
    lang: 'js',
    sort: true,
    style: 'default',
    title: basename(options.path) + ' API documentation',
    toc: 'properties'
  })

  if (!options.path || !options.url) {
    throw new Error('Path and URL must be specified')
  }
  return generateDoc(readFileSync(options.path, 'utf8'), options)
}
