const { ethers, run, network } = require("hardhat");

async function main() {}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract..");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log(`simple storage deployed: ${simpleStorage.address}`);
  // Verify contract deployment on etherscan
  console.log(network.config);
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }
  const currentValue = await simpleStorage.retrieve();
  console.log(`Our current value is: ${currentValue}`);
  // Update current value
  const transactionResponse = await simpleStorage.store(8);
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`Our current updated value is: ${updatedValue}`);
}
async function verify(contactAddress, args) {
  console.log("verifying contract..");
  try {
    await run("verify:verify", {
      address: contactAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified");
    } else {
      console.log(error, "Error");
    }
  }
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
