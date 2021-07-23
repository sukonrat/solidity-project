// SPDX-License -Identifier: MIT  //-> license header, So community can trust

pragma solidity >=0.7.0 <0.9.0;  //complier directive

  //similar to class in other language
contract MyContract { 
    
    //property --> type, modifier, identifier
    string private name;

    //function that will be invoked when smartcontract is created
    constructor(string memory _name){
        name = _name;

    } 

    //setter method, that contain transaction , this part it will be written into block , fees
    function changeName(string memory _name) public{
        name = _name;
    }

    //getter method, readonly data, no transaction, no fees
    function getName()public view returns (string memory){
        return name;
    }
}
