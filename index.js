const notams = require('notams')

notams.fetch(['PADK', 'PADU'], { format: 'DOMESTIC' }).then(results => {
  console.log(JSON.stringify(results, null, 2))
})
