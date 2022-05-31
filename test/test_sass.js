const path = require('path')
const sassTrue = require('sass-true')
const importer = require('./sass-importer-npm')

const sassFile = path.join(__dirname, 'test.scss')
sassTrue.runSass({ importer: importer, file: sassFile }, { describe, it })
