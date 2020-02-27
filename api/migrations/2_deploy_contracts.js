var supermarket = artifacts.require("./supermarket.sol");

module.exports = function(deployer) {
  deployer.deploy(supermarket);
};
