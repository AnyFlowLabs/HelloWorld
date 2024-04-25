// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract AnyflowHelloWorld {
    uint public helloCount;
    string public helloMessage;

    event Hello(address _address, string _message, uint _count);

    constructor(string memory _helloMessage) {
        helloMessage = _helloMessage;
    }

    function hello() public {
        helloCount++;
        emit Hello(msg.sender, helloMessage, helloCount);
    }
}
