const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", () => {
  let simpleStorageFactory, simpleStorage;

  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });
  it("Should start with a favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });
  it("Should update the favorite number when store function gets called", async function () {
    const transactionResponse = await simpleStorage.store(8);
    await transactionResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();
    const expectedValue = "8";
    assert.equal(updatedValue.toString(), expectedValue);
  });
});
