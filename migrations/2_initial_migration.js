const Token = artifacts.require("Token");
const ParsSwap = artifacts.require("ParsSwap");

module.exports = async function (deployer) {
  
  await deployer.deploy(Token);
  const token = await Token.deployed();

  await deployer.deploy(ParsSwap, token.address);
  const parsSwap = ParsSwap.deployed()
  
  // await token.transfer(parsSwap.address) 
};
