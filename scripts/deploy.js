const { ethhers, hre } = require("hardhat");

async function main() {}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
async function main() {
  const SimpleStorageFactory = await ethhers.SimpleStorageFactory(
    "SimpleStorage"
  );
  console.log("Deploying contract..");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deplo();
  console.log(process.env.RPC_URL);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
