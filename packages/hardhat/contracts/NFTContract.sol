// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract YourContract is ERC721Enumerable, Ownable {
    // _price is 0.0001 ETH
    uint256 constant public _price = 0.03 ether;
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIds;

  /**
      * @dev ERC721 constructor takes in a `name` and a `symbol` to the token collection.
      * name in our case is `CoffeeNft` and symbol is `CN`.
      */

constructor() ERC721("CNFT", "CN") {}

function mint() public payable {
    // require(totalSupply < macTokenIds/)
    //require(totalSupply < maxTokenIds, "EXCEEDED_MAX_SUPPLY");
    //require(balanceOf(msg.sender) == 0, "ALREADY_OWNED");
    require(msg.value >= _price, "NOT_ENOUGH_ETHER");
	//require((msg.value * (10 ** 18)) >= _price, "NOT_ENOUGH_ETHER");
    uint256 tokenId = _tokenIds.current();
    _safeMint(msg.sender, tokenId);
	_tokenIds.increment();

}
}