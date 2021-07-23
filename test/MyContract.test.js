const { expect } = require( "chai");  //import expect from chai


//logical block
//create structure for testing
describe("MyContract", ()=>{

    //structure for testing function
    it("Should return its name", async () => {

        //injected test global
        //ethers check smartcontract and create factory
        const MyContract = await ethers.getContractFactory("MyContract");

        //invoke constructor 
        const myContract = await MyContract.deploy("MyContract");
        
        await myContract.deployed();
        expect(await myContract.getName()).to.equal("MyContract");
    })
    it("should change its name when requested", async () => {
        const MyContract = await ethers.getContractFactory("MyContract");
        const myContract = await MyContract.deploy("MyContract");

        await myContract.changeName("Another Contract");
        expect(await myContract.getName()).to.equal("Another Contract");
    })
})