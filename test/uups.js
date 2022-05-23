const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");
const { BigNumber } = require("ethers"); 

describe("Transpatent patern", function () {
  let uups1
  let uups2
  let uups3
  let uups4
  let Uups4

  beforeEach(async function () {
    const Uups1 = await ethers.getContractFactory("UUPSV1")
    // const Uups2 = await ethers.getContractFactory("UUPSV2")
    // const Uups3 = await ethers.getContractFactory("UUPSV3")
    // Uups4 = await ethers.getContractFactory("UUPSV4")

    uups1 = await upgrades.deployProxy(Uups1, [42], {initializer: 'initialize', kind: "uups"})
    // console.log(uups1.address," tr1/proxy")
    // console.log(await upgrades.erc1967.getImplementationAddress(uups1.address)," getImplementationAddress")
    // console.log(await upgrades.erc1967.getAdminAddress(uups1.address), " getAdminAddress")   

    // tr2 = await upgrades.upgradeProxy(tr1.address, Tr2)
    // console.log(tr2.address," tr2/proxy after upgrade")
    // console.log(await upgrades.erc1967.getImplementationAddress(tr2.address)," getImplementationAddress after upgrade")
    // console.log(await upgrades.erc1967.getAdminAddress(tr2.address)," getAdminAddress after upgrade")   

    // tr3 = await upgrades.upgradeProxy(tr1.address, Tr3)
    // console.log(tr3.address," tr3/proxy after upgrade")
    // console.log(await upgrades.erc1967.getImplementationAddress(tr3.address)," getImplementationAddress after upgrade")
    // console.log(await upgrades.erc1967.getAdminAddress(tr3.address)," getAdminAddress after upgrade")  

  })

  it("checking value", async function () {
      console.log(123)
    // expect(await tr1.value()).to.equal(BigNumber.from('42'))
    // expect(await tr2.value()).to.equal(BigNumber.from('42'))
    // expect(await tr3.value()).to.equal(BigNumber.from('42'))
    
    // await tr2.increment(); // 42 + 1
    // expect(await tr1.value()).to.equal(BigNumber.from('43'))
    // expect(await tr2.value()).to.equal(BigNumber.from('43'))
    // expect(await tr3.value()).to.equal(BigNumber.from('43'))

    // await tr3.decrement(); // 43 - 1
    // expect(await tr1.value()).to.equal(BigNumber.from('42'))
    // expect(await tr2.value()).to.equal(BigNumber.from('42'))
    // expect(await tr3.value()).to.equal(BigNumber.from('42'))

    // tr4 = await upgrades.upgradeProxy(tr1.address, Tr4)
    // console.log(tr4.address," tr4/proxy after upgrade")
    // console.log(await upgrades.erc1967.getImplementationAddress(tr4.address)," getImplementationAddress after upgrade")
    // console.log(await upgrades.erc1967.getAdminAddress(tr4.address)," getAdminAddress after upgrade")  

    // await tr4.double(); // 42 * 2
    // expect(await tr1.value()).to.equal(BigNumber.from('84'))
    // expect(await tr2.value()).to.equal(BigNumber.from('84'))
    // expect(await tr3.value()).to.equal(BigNumber.from('84'))
    // expect(await tr4.value()).to.equal(BigNumber.from('84'))
  })

})