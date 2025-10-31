/**
 * @param {string} command
 * @return {string}
 */
const interpret = function(command) {
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "(" && command[i + 1] === ")") {
      command = command.slice(0, i) + "o" + command.slice(i + 2);
      i--;
    } else if (command[i] === "(" || command[i] === ")") {
      command = command.slice(0, i) + command.slice(i + 1);
      i--;
    }
  }

  return command;
};
