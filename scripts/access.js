const { exec } = require("child_process");

function access() {
  exec("ls -l", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

window.onload = access;
