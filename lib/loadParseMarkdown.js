
// NOTE: This file should not require edits
const fs = require('fs').promises
const unified = require('unified')
const remarkParse = require('remark-parse')
const frontMatter = require('remark-frontmatter')

/*
 * - Open Directory Handler for `./docs`
 * - Read each Markdown file in as `utf-8` and bind into a Promise.readFile
 * - Parse the fileBuffer with Remark to have a Markdown AST Buffer
 */
module.exports = () => {
  return fs.readdir('./docs').then(files => {
    const filesToProcessPromise = files.map((file) => fs.readFile('./docs/' + file, 'utf-8'))
    return Promise.all(filesToProcessPromise).then(fileBuffers => {
      // console.log(`Have ${fileBuffers.length} FileBuffers`)
      const processedFileBuffers = fileBuffers.map(fileBuffer => {
        return unified().use(remarkParse).use(frontMatter).parse(fileBuffer)
      })
      return processedFileBuffers
    }).catch(error => {
      console.log(error)
    })
  }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}
