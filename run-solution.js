const loadParseMarkdown = require('./lib/loadParseMarkdown')
const { marshallYamlSet } = require('./lib/utils')
const checkInventorsTagged = require('./lib/checkInventorsTagged')
const chalk = require('chalk')
const _ = require('lodash')

/*
 *  Applicant SHOULD NOT make any changes to this file
 */
// Use our promise baased directory/file processor to reads the `docs/` folder
loadParseMarkdown().then(markdownBuffers => {
  // create `yamlSet` from the markdownBuffer AST
  const yamlSet = marshallYamlSet(markdownBuffers)
  // Applicant implements the checkInventorsTagged method
  // should return an array of strings
  const inventors = checkInventorsTagged(yamlSet)

  // Render to stdout a basic report
  if (_.isArray(inventors) && inventors.length > 0) {
    console.log('\nInventors at gitBabel: ' + chalk.green(inventors))
  } else {
    console.log('\nInventors at gitBabel: ' + chalk.yellow('missing data'))
  }
}).catch(error => { console.error(error) })
