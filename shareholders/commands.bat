@REM UPLOAD
ts-node metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload -e mainnet-beta -k  D:/Documents/Kraig/SolanaWallet/cory-keypair.json -cp config-shareholder.json -c martian-shareholders ./assets

@REM GET MINT ADDRESSES
ts-node metaplex/js/packages/cli/src/candy-machine-v2-cli.ts get_all_mint_addresses -e mainnet-beta -k D:/Documents/Kraig/SolanaWallet/cory-keypair.json -cp config-shareholder.json -c martian-shareholders