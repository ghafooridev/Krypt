//https://eth-sepolia.g.alchemy.com/v2/t6_tTZ94ZlU9X9zBqBeuJh2ng7g9RcV6

require('@nomiclabs/hardhat-waffle');


// module.exports = {
//   solidity: '0.8.0',
//   networks: {
//     Sepolia:{
//       url:'https://eth-sepolia.g.alchemy.com/v2/t6_tTZ94ZlU9X9zBqBeuJh2ng7g9RcV6',
//       accounts:['f4d2c30cebe1831b9a93d72869ef069f0916920e7a42ca1e5ab3fe7b55340e8b']
//     }
//   }
// };


module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/t6_tTZ94ZlU9X9zBqBeuJh2ng7g9RcV6',
      accounts: ['f4d2c30cebe1831b9a93d72869ef069f0916920e7a42ca1e5ab3fe7b55340e8b']
    }
  }
};

// write in terminal: npx hardhat run scripts/deploy.js