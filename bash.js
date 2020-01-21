const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  const cmd2 = cmd.split(' ');

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd2[0] === 'cat') {
    cat(cmd2[1]);
  } else {
    process.stdout.write('\nprompt > ');
  }
});
