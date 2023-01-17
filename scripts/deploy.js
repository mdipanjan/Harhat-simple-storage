const { ethers } = require("hardhat");

async function main() {}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract..");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log(`simple storage deployed: ${simpleStorage.address}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
