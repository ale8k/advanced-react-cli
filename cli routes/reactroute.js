const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cli model/cli-model");
const installOption = cliModel.installOption();

// CLI Install Commands
const { reactRouterObj } = require("../cli model/install-commands");
/**
 * tut @shreyas ;)
 * @see f cli.js prompt const for further comment
 */
const prompt = inquirer.createPromptModule();

const reactRouter = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get(`${reactRouterObj.install}`, function(err, data, stderr) {
        console.log(data);
      });
      console.log(
        "Packages: react-router & react-router-dom has been installed successfully!"
      );
    } else if (decision === "Uninstall") {
      cmd.get(`${reactRouterObj.uninstall}`, function(err, data, stderr) {
        console.log(data);
      });
      console.log(
        "Packages: react-router & react-router-dom has been uninstalled successfully!"
      );
    }
  });
};

module.exports = reactRouter;
