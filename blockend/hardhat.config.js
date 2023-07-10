/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: {
//     version: '0.8.9',
//     defaultNetwork: 'goerli',
//     networks: {
//       hardhat: {},
//       goerli: {
//         url: 'https://rpc.ankr.com/eth_goerli',
//         accounts: [`0x${process.env.PRIVATE_KEY}`]
//       }
//     },
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };

require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const SOPOLIA_RPC_URL = process.env.SOPOLIA_RPC_URL;
// console.log(SOPOLIA_RPC_URL);
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const goerliRPC = 'https://rpc.goerli.eth.gateway.fm';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    sepolia: {
      url: SOPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    goerli: {
      url: goerliRPC,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      // accounts: [], hardhat assign it by default
      chainId: 31337, // has the same chain id as hardhat
    },
  },
  solidity: '0.8.18',
  // gasReporter: {
  //     enabled: true,
  //     outputFile: "gas-report.txt",
  // },
};
