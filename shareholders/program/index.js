import web3 from '@solana/web3.js';
import {
	program
} from 'commander';

programCommand('get_all_mint_addresses').action(async (directory, cmd) => {
	const {
		env,
		cacheName,
		keypair
	} = cmd.opts();

	const cacheContent = loadCache(cacheName, env);
	const walletKeyPair = loadWalletKey(keypair);
	const anchorProgram = await loadCandyProgramV2(walletKeyPair, env);

	const candyMachineId = new PublicKey(cacheContent.program.candyMachine);
	const [candyMachineAddr] = await deriveCandyMachineV2ProgramAddress(
		candyMachineId,
	);

	const accountsByCreatorAddress = await getAccountsByCreatorAddress(
		candyMachineAddr.toBase58(),
		anchorProgram.provider.connection,
	);
	const addresses = accountsByCreatorAddress.map(it => {
		return new PublicKey(it[0].mint).toBase58();
	});

	console.log(JSON.stringify(addresses, null, 2));
});

function programCommand(name) {
	return program
		.command(name)
		.option(
			'-e, --env <string>',
			'Solana cluster env name',
			'devnet', //mainnet-beta, testnet, devnet
		)
		.requiredOption('-k, --keypair <path>', `Solana wallet location`)
		.option('-l, --log-level <string>', 'log level', setLogLevel)
		.option('-c, --cache-name <string>', 'Cache file name', 'temp');
}

program.parse(process.argv);