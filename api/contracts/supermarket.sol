pragma solidity ^0.6.0;

contract supermarket{
    
    address payable public store;
    
    event purchase_made(address, uint[], uint[], uint[], uint, uint, bool);
    
    constructor() public{
        store = 0xD9fc93401b9EA78eF7c235Ac05fDE93e74bF0752;
    }
    
    function make_purchase(uint[] memory _items, uint[] memory _unit_prices, uint[] memory _qty, uint _total )public payable{
        require(msg.value >= _total, "Insufficient amount sent.");
        
        store.transfer(_total);
        msg.sender.transfer(msg.value-_total);
        
        emit purchase_made(msg.sender, _items, _unit_prices, _qty, _total, now, true);
    }
}