// Applicant should not modify this file
const yaml = require('js-yaml')

// Take yamlBlocks and abstract them out
const marshallYamlSet = (markdownBuffers) => {
  const tagSet = []
  // Use a forEach so we can tuple the tags with the #title
  markdownBuffers.forEach(buffer => {
    const tagObject = {
      yaml: yaml.load(buffer.children[0].value),
      title: buffer.children[1].children[0].value
    }
    tagSet.push(tagObject)
  })
  return tagSet
}

module.exports = {
  marshallYamlSet: marshallYamlSet
}
