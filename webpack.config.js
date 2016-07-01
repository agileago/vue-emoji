var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: './dist/',
    filename: 'vue-emoji.js',
    library: 'VueEmoji',
    libraryTarget: 'umd'
  }
}