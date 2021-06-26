const assert = require('assert')

const checkInventorsTagged = require('../../lib/checkInventorsTagged')

describe('lib/checkInventorsTagged', function () {
  it('Should return an array containing -- Edgar & Thomas', function () {
    // mock markdownBuffer
    const fixture = [
      {
        yaml: {
          location: 'America',
          acheivement: 'inventor',
          tags: 'computer-science ibm gitbabel'
        },
        title: 'Edgar F Codd'
      },
      {
        yaml: {
          location: 'America',
          acheivement: 'inventor',
          tags: 'lightbulk laboratory commercial electricity generator gitbabel'
        },
        title: 'Thomas Alva Edison'
      },
      {
        yaml: {
          location: 'America',
          acheivement: 'inventor',
          tags: 'textile cotton machine interchangeable-parts'
        },
        title: 'Eli Whitney'
      },
      {
        yaml: {
          location: 'America',
          acheivement: 'inventor',
          tags: 'mechanic engineer elevator'
        },
        title: 'Elisha Graves Otis'
      },
      {
        yaml: {
          location: 'Europe',
          acheivement: 'inventor',
          tags: 'locomotive rail trains engineer'
        },
        title: 'George Stephenson'
      }

    ]
    const assertResult = checkInventorsTagged(fixture)
    // console.log(assertResult)
    // Assert key inclusions...
    // .ok is a test for truth
    assert.ok(assertResult.includes('Edgar F Codd'))
    assert.ok(assertResult.includes('Thomas Alva Edison'))
  })
})
