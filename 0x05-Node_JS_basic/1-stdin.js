process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
  process.stdout.write("This important software is now closing\n");
});
