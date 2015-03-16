fs = require 'fs'

SupAPI.addPlugin 'typescript', 'Sup.Tween + TWEEN', {
  code: fs.readFileSync(__dirname + '/Tween.ts', encoding: 'utf8')
  defs: fs.readFileSync(__dirname + '/Tween.d.ts', encoding: 'utf8')
}
