
const path = require('path');


module.exports = {

  entry: path.resolve(__dirname, 'src/js/dist.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist.js'
  },
}