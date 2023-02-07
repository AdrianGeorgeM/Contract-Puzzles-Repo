const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');

describe('Game4', function () {
	async function deployContractAndSetVariables() {
		const Game = await ethers.getContractFactory('Game4');
		const game = await Game.deploy();

		// Hardhat will create 10 accounts for you by default
		// you can get one of this accounts with ethers.provider.getSigner
		// and passing in the zero-based indexed of the signer you want:

		const signer = ethers.provider.getSigner(0);
		const address = await signer.getAddress();

		return { game, address };
	}
	it('should be a winner', async function () {
		const { game, address } = await loadFixture(deployContractAndSetVariables);

		// nested mappings are rough :}
		await game.write(address);

		await game.win(address);

		// leave this assertion as-is
		assert(await game.isWon(), 'You did not win the game');
	});
});
