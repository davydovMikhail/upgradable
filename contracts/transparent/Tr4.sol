// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransparentV4 {
    uint256 public value;

    function write(uint256 _newValue) public {
        value = _newValue;
    }

    function increment() public {
        value = value + 1;
    }

    function decrement() public {
        value = value - 1;
    }

    function double() public {
        value = value * 2;
    }
}
