const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "street present smooth game same ensure crane forum fade deny brass inflict";

module.exports = {

  contracts_build_directory: "app/build/contracts",
  networks: {
    
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/63f56f544f644afeaad7744c534d426a`),
      network_id: 3,
    },

  },

  mocha: {
  },

  compilers: {
    solc: {
      version: "^0.6.0",
    }
  }
}
