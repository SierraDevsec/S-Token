const BiibroSToken = artifacts.require("./BiibroSToken");

module.exports = function(deployer) {
    deployer.deploy(BiibroSToken);
}

