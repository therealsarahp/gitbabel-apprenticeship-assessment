const assert = require('assert')

const { marshallYamlSet } = require('../../lib/utils')

describe('lib/utils', function () {
  describe('marshallYamlSet', function () {
    it('Should return an objectSet', function () {
      // mock markdownBuffer
      const fixture = [{
        children: [
          // emulate the value for child[0] which is the yaml and has .value
          {
            value: 'location: America\n' + 'acheivement: inventor\n' + 'tags: medical birth score-system columbia doctor'
          },
          // emulate value for child[1] which is the header block
          {
            children: [{ value: 'title of markdown file' }]
          }

        ]
      }]
      const assertResult = marshallYamlSet(fixture)
      assert.strictEqual(assertResult[0].yaml.location, 'America')
      assert.strictEqual(assertResult[0].title, 'title of markdown file')
    })
  })
})
