const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");
const { BigNumber } = require("ethers"); 

describe("Transpatent patern", function () {
  let tr1
  let tr2
  let tr3
  let tr4
  let Tr4

  beforeEach(async function () {
    const Tr1 = await ethers.getContractFactory("TransparentV1")
    const Tr2 = await ethers.getContractFactory("TransparentV2")
    const Tr3 = await ethers.getContractFactory("TransparentV3")
    Tr4 = await ethers.getContractFactory("TransparentV4")

    tr1 = await upgrades.deployProxy(Tr1, [42], {initializer: 'write'})
    console.log(tr1.address," tr1/proxy")
    console.log(await upgrades.erc1967.getImplementationAddress(tr1.address)," getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(tr1.address), " getAdminAddress")   

    tr2 = await upgrades.upgradeProxy(tr1.address, Tr2)
    console.log(tr2.address," tr2/proxy after upgrade")
    console.log(await upgrades.erc1967.getImplementationAddress(tr2.address)," getImplementationAddress after upgrade")
    console.log(await upgrades.erc1967.getAdminAddress(tr2.address)," getAdminAddress after upgrade")   

    tr3 = await upgrades.upgradeProxy(tr1.address, Tr3)
    console.log(tr3.address," tr3/proxy after upgrade")
    console.log(await upgrades.erc1967.getImplementationAddress(tr3.address)," getImplementationAddress after upgrade")
    console.log(await upgrades.erc1967.getAdminAddress(tr3.address)," getAdminAddress after upgrade")  

  })

  it("checking value", async function () {
    expect(await tr1.value()).to.equal(BigNumber.from('42'))
    expect(await tr2.value()).to.equal(BigNumber.from('42'))
    expect(await tr3.value()).to.equal(BigNumber.from('42'))
    
    await tr2.increment(); // 42 + 1
    expect(await tr1.value()).to.equal(BigNumber.from('43'))
    expect(await tr2.value()).to.equal(BigNumber.from('43'))
    expect(await tr3.value()).to.equal(BigNumber.from('43'))

    await tr3.decrement(); // 43 - 1
    expect(await tr1.value()).to.equal(BigNumber.from('42'))
    expect(await tr2.value()).to.equal(BigNumber.from('42'))
    expect(await tr3.value()).to.equal(BigNumber.from('42'))

    tr4 = await upgrades.upgradeProxy(tr1.address, Tr4)
    console.log(tr4.address," tr4/proxy after upgrade")
    console.log(await upgrades.erc1967.getImplementationAddress(tr4.address)," getImplementationAddress after upgrade")
    console.log(await upgrades.erc1967.getAdminAddress(tr4.address)," getAdminAddress after upgrade")  

    await tr4.double(); // 42 * 2
    expect(await tr1.value()).to.equal(BigNumber.from('84'))
    expect(await tr2.value()).to.equal(BigNumber.from('84'))
    expect(await tr3.value()).to.equal(BigNumber.from('84'))
    expect(await tr4.value()).to.equal(BigNumber.from('84'))
  })

})