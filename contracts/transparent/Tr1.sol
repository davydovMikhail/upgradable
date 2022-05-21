// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransparentV1 {
    uint256 public value;

    function write(uint256 _newValue) public {
        value = _newValue;
    }
}
