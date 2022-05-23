// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract UUPSV1 is Initializable, OwnableUpgradeable, UUPSUpgradeable {
    uint256 public value;

    function initialize(uint256 _value) public initializer {
        __UUPSUpgradeable_init();
        __Ownable_init();
        value = _value;
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyOwner
    {}

    // constructor() initializer {}

    function write(uint256 _newValue) public {
        value = _newValue;
    }
}
