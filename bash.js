//Outpiut a prompt
const pwd = require('./pwd');
const ls = require('./ls');
process.stdout.write('prompt > ');

//stdin 'data' event fires after a user types in a line

process.stdin.on('data', data => {
  const cmd = data.toString().trim(); //removed the newline

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  }
  //process.stdout.write('You typed: ' + cmd);
  //process.stdout.write('prompt > ');
});
