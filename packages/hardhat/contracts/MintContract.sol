// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintContract is ERC20, Ownable {
    address public deployer;
    constructor() ERC20("CarbonToken", "CTN") {
        _mint(msg.sender, 1000 * 10 ** decimals());
        deployer = msg.sender;
    }
    //Token transfer with mug. Gets rewards
    function transferTokens(uint256 amount) public payable {
        //require(to != address(0), "Invalid address");
        require(amount > 0, "Amount must be greater than 0");
        //require(amount <= balanceOf(msg.sender), "Insufficient balance");


         // Transfer Ether
        require(msg.value >= 0.003 ether, "Insufficient Ether sent");
        payable(deployer).transfer(0.003 ether);

        // Transfer CTN token
        _transfer(deployer, msg.sender, amount);
    }
    //Token transfer without mug. Gets no rewards
    function notransferTokens() public payable {
        //require(to != address(0), "Invalid address");
        //require(amount > 0, "Amount must be greater than 0");
        //require(amount <= balanceOf(msg.sender), "Insufficient balance");


         // Transfer Ether
        require(msg.value >= 0.003 ether, "Insufficient Ether sent");
        payable(deployer).transfer(0.003 ether);

    }
}