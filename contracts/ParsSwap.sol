// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import './Token.sol';

contract ParsSwap {
    string public name = "ParsSwap Instant Exchange";
    Token public token ;
    uint public rate = 1000;

    event TokenPurchaced (
        address Account,
        address  Token,
        uint amount,
        uint rate
    );

    event TokenSold (
        address Account,
        address  Token,
        uint amount,
        uint rate
    );



    constructor(Token _token) {
        token = _token;
    }


    function buyToken() public payable {
    uint tokenAmount =(msg.value * rate);

    require(token.balanceOf(address(this)) >= tokenAmount);
    token.transfer(msg.sender, tokenAmount);

    emit TokenPurchaced(msg.sender, address(token), tokenAmount, rate);
    
    }


    function sellToken(uint _amount) public {
        uint etherAmount = _amount/rate;

        require(address(this).balance >= etherAmount);
        require(token.balanceOf(msg.sender) >= _amount);

        token.transferFrom(address(this), msg.sender, _amount);
        payable(msg.sender).transfer(etherAmount);

        emit TokenSold(msg.sender, address(token), _amount, rate);  
    }
}