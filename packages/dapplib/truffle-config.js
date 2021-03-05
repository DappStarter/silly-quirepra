require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strike rival place erosion idea narrow equal gasp'; 
let testAccounts = [
"0x2f65fa7d408c758955d6062e44adbf97f07591fda3574e7ec11cf273e2a7ec32",
"0x72466fae0caa9903ba8b44d063fa0ea8d236fe06be7d6b9fe572c89a85a2bd39",
"0xf50082c941bdbce449d87d1294c5ff113f9296d01752c10f4ec3835f12a19e13",
"0x412f6d2e1093f05dbc1e9c9846671c8b8097debb2bb045801bff6d8ff218c803",
"0x2653d2dea8dfed1585e9c8355331381c708fd3068e2787f26675d11f0d915ef6",
"0xe4970590e63d40506c3d73034ef70172fb82986674a0686e701d2204838aedeb",
"0x80956dec6dc82e3a53611f9566818953464df178afa7ac3705384278bcc5575f",
"0xa39282ffb7c7424226649712f307e8d69a5050ab2d3fd6f706fa70d1bc7e6d4a",
"0x547a8ffcb87a7236609556d4c92238c5eace4ec2d6994db98bae163194105ebf",
"0xe1c362abab312f123bcfecf91c7147927a4a146f62ad072e161226fb36e8651e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
