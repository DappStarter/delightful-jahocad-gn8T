require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad heavy area bridge shuffle'; 
let testAccounts = [
"0xcfb38eff4dd78616d06ba7979de6078d33e83bc5e3ea706bef29e5a4d4f48c90",
"0xeffbe3346804b818ba00d095e0fc70bfc94d23d6d1b51dc9c2670d2b6b57dc1c",
"0xac2a5ec4ca2c90f2b6a75ff0abcabcf1393d268498bba6c03f7589dd71230b44",
"0x995a5646c8dbe524242656d35c0fe5f2ec5470b6d6edc18fe8cf8b09cb4c1bf5",
"0x703e80d379f2dda7b875c73f624517afbfc49683a8b3a1ab5a57830fa56d5d2f",
"0xa47257f31fad69bf232c6ba6a3f04be2fc74443694559d649894ea064ec12661",
"0x94750c07db095fead43558d9caca6d6c35b4a2c7ec72297d4c919d6f686c4d7f",
"0x8cc0a264b2f6d9bc7b35b4744e267b7f724ad0cf5c8afe6be09c887a1b86a580",
"0x55c990f7211d0e60bb1859d2d12ca92e734c97f28a79ed57367d8660f2a1b6ea",
"0x0ffd1efdd5a87f8dad6e808231a8258f0f789420b966e01d0614a4608871895c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


