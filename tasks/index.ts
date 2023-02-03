import { task, types } from "hardhat/config"

//
task("oftSend", "send tokens to another chain", require("./oftSend"))
    .addParam("qty", "qty of tokens to send")
    .addParam("targetNetwork", "the target network to let this instance receive messages from")
    .addOptionalParam("localContract", "Name of local contract if the names are different")
    .addOptionalParam("remoteContract", "Name of remote contract if the names are different")
    .addOptionalParam("contract", "If both contracts are the same name")

task("transferOwnershipToMultisig", "transfer the contract to the multisig", require("./transferOwnershipToMultisig"))

// npx hardhat wireAll --e testnet --s arbitrum-goerli,fuji,bsc-testnet --d arbitrum-goerli,fuji,bsc-testnet
task("wireAll", "", require("./wireAll"))
    .addParam("e", "the environment ie: mainnet, testnet or sandbox")
    .addParam("s", "comma seperated list of networks to config on")
    .addParam("d", "comma seperated list of networks to config on")
    .addParam("noPrompt", "no prompt", false, types.boolean)
    .addOptionalParam("n", "send to gnosis", false, types.boolean)
