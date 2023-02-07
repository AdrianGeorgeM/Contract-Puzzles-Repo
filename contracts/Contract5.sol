// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "hardhat/console.sol";

// When running your contracts and tests on Hardhat Network you can print logging messages and contract variables calling console.log() from your Solidity code.
contract Game5 {
    bool public isWon;

    address threshold = 0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf;

    function win() external {
        require(bytes20(msg.sender) < bytes20(threshold), "Nope. Try again!");

        console.log("msg.sender: ", msg.sender);
        isWon = true;
    }
}
