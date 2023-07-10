const { ethers } = require('hardhat');

async function main() {
  const CrowdFundFactory = await ethers.getContractFactory('CrowdFunding');
  console.log('Deploying our Contract....');
  const crowdFund = await CrowdFundFactory.deploy();
  await crowdFund.deployed();
  console.log('Deployed Contract to Address: ', crowdFund.address);
}

// async function verify(contractAddress, args) {}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
