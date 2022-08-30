/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require("dotenv").config()
 require("@nomiclabs/hardhat-ethers")
 
 const { API_URL, PRIVATE_KEY } = process.env
 
 module.exports = {
   version: "0.8.9",
   defaultNetwork: "goerli",
   networks: {
     hardhat: {},
     goerli: {
       url: API_URL,
       accounts: [PRIVATE_KEY],
     },
   },
 }

 