// Import commands from other JS
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

//Output a prompt
process.stdout.write('prompt > ');

//stdin 'data' event fires after a user types in a line

process.stdin.on('data', data => {
  const cmd = data.toString().trim(); //removed the newline
  let splitCmd = cmd.split(' '); // splits cmd into an array of words

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (splitCmd[0] === 'cat') {
    cat(splitCmd[1]);
  }
  //process.stdout.write('You typed: ' + cmd);
  //process.stdout.write('prompt > ');
});
