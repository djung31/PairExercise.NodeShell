const fs = require('fs');

module.exports = function (filename) {
  fs.readFile(`./${filename}`, 'utf8', function (err, data) {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('prompt > ');
    }
  })
};
