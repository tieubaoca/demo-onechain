#!/bin/bash
chmod u+r+x  $0

KEY="mykey"
CHAINID="demoonechain_9000-1"
MONIKER="localtestnet"
KEYRING="test"
LOGLEVEL="info"
# to trace evm
TRACE="--trace"
# TRACE=""

# ETH_GENESIS_ACCOUNTS=$(cat ./genesis/BUSD/bytecode.json | jq '.evm_account' -r)
# AUTH_GENESIS_ACCOUNTS=$(cat ./genesis/BUSD/bytecode.json | jq '.auth_account' -r)


# validate dependencies are installed
command -v jq > /dev/null 2>&1 || { echo >&2 "jq not installed. More info: https://stedolan.github.io/jq/download/"; exit 1; }

# remove existing daemon and client
rm -rf ~/.demo-onechain*

go install ./...

demo-onechaind config keyring-backend $KEYRING
demo-onechaind config chain-id $CHAINID



# if $KEY exists it should be deleted
demo-onechaind keys add $KEY --keyring-backend $KEYRING 

# Set moniker and chain-id for Ethermint (Moniker can be anything, chain-id must be an integer)
demo-onechaind init $MONIKER --chain-id $CHAINID

# Change parameter token denominations to och
cat $HOME/.demo-onechain/config/genesis.json | jq '.app_state["staking"]["params"]["bond_denom"]="och"' > $HOME/.demo-onechain/config/tmp_genesis.json && mv $HOME/.demo-onechain/config/tmp_genesis.json $HOME/.demo-onechain/config/genesis.json
cat $HOME/.demo-onechain/config/genesis.json | jq '.app_state["crisis"]["constant_fee"]["denom"]="och"' > $HOME/.demo-onechain/config/tmp_genesis.json && mv $HOME/.demo-onechain/config/tmp_genesis.json $HOME/.demo-onechain/config/genesis.json
cat $HOME/.demo-onechain/config/genesis.json | jq '.app_state["gov"]["deposit_params"]["min_deposit"][0]["denom"]="och"' > $HOME/.demo-onechain/config/tmp_genesis.json && mv $HOME/.demo-onechain/config/tmp_genesis.json $HOME/.demo-onechain/config/genesis.json
cat $HOME/.demo-onechain/config/genesis.json | jq '.app_state["mint"]["params"]["mint_denom"]="och"' > $HOME/.demo-onechain/config/tmp_genesis.json && mv $HOME/.demo-onechain/config/tmp_genesis.json $HOME/.demo-onechain/config/genesis.json
# cat $HOME/.demo-onechain/config/genesis.json | jq '.app_state["evm"]["params"]["evm_denom"]="ahihi"' > $HOME/.demo-onechain/config/tmp_genesis.json && mv $HOME/.demo-onechain/config/tmp_genesis.json $HOME/.demo-onechain/config/genesis.json

# cat $HOME/.demo-onechain/config/genesis.json | jq -r --argjson ETH_GENESIS_ACCOUNTS "$ETH_GENESIS_ACCOUNTS" '.app_state["evm"]["accounts"] += [$ETH_GENESIS_ACCOUNTS]' > $HOME/.demo-onechain/config/tmp_genesis.json && mv $HOME/.demo-onechain/config/tmp_genesis.json $HOME/.demo-onechain/config/genesis.json
# cat $HOME/.demo-onechain/config/genesis.json | jq -r --argjson AUTH_GENESIS_ACCOUNTS "$AUTH_GENESIS_ACCOUNTS" '.app_state["auth"]["accounts"] += [$AUTH_GENESIS_ACCOUNTS]' > $HOME/.demo-onechain/config/tmp_genesis.json && mv $HOME/.demo-onechain/config/tmp_genesis.json $HOME/.demo-onechain/config/genesis.json



# increase block time (?)
cat $HOME/.demo-onechain/config/genesis.json | jq '.consensus_params["block"]["time_iota_ms"]="1000"' > $HOME/.demo-onechain/config/tmp_genesis.json && mv $HOME/.demo-onechain/config/tmp_genesis.json $HOME/.demo-onechain/config/genesis.json

# Set gas limit in genesis
cat $HOME/.demo-onechain/config/genesis.json | jq '.consensus_params["block"]["max_gas"]="10000000"' > $HOME/.demo-onechain/config/tmp_genesis.json && mv $HOME/.demo-onechain/config/tmp_genesis.json $HOME/.demo-onechain/config/genesis.json

# disable produce empty block
if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' 's/create_empty_blocks = true/create_empty_blocks = false/g' $HOME/.demo-onechain/config/config.toml
  else
    sed -i 's/create_empty_blocks = true/create_empty_blocks = false/g' $HOME/.demo-onechain/config/config.toml
fi

if [[ $1 == "pending" ]]; then
  if [[ "$OSTYPE" == "darwin"* ]]; then
      sed -i '' 's/create_empty_blocks_interval = "0s"/create_empty_blocks_interval = "30s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i '' 's/timeout_propose = "3s"/timeout_propose = "30s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i '' 's/timeout_propose_delta = "500ms"/timeout_propose_delta = "5s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i '' 's/timeout_prevote = "1s"/timeout_prevote = "10s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i '' 's/timeout_prevote_delta = "500ms"/timeout_prevote_delta = "5s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i '' 's/timeout_precommit = "1s"/timeout_precommit = "10s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i '' 's/timeout_precommit_delta = "500ms"/timeout_precommit_delta = "5s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i '' 's/timeout_commit = "5s"/timeout_commit = "150s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i '' 's/timeout_broadcast_tx_commit = "10s"/timeout_broadcast_tx_commit = "150s"/g' $HOME/.demo-onechain/config/config.toml
  else
      sed -i 's/create_empty_blocks_interval = "0s"/create_empty_blocks_interval = "30s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i 's/timeout_propose = "3s"/timeout_propose = "30s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i 's/timeout_propose_delta = "500ms"/timeout_propose_delta = "5s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i 's/timeout_prevote = "1s"/timeout_prevote = "10s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i 's/timeout_prevote_delta = "500ms"/timeout_prevote_delta = "5s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i 's/timeout_precommit = "1s"/timeout_precommit = "10s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i 's/timeout_precommit_delta = "500ms"/timeout_precommit_delta = "5s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i 's/timeout_commit = "5s"/timeout_commit = "150s"/g' $HOME/.demo-onechain/config/config.toml
      sed -i 's/timeout_broadcast_tx_commit = "10s"/timeout_broadcast_tx_commit = "150s"/g' $HOME/.demo-onechain/config/config.toml
  fi
fi

# Allocate genesis accounts (cosmos formatted addresses)
demo-onechaind add-genesis-account $KEY 100000000000000000000000000och --keyring-backend $KEYRING

# Sign genesis transaction
demo-onechaind gentx $KEY 1000000000000000000000och --keyring-backend $KEYRING --chain-id $CHAINID

# Collect genesis tx
demo-onechaind collect-gentxs

# Run this to ensure everything worked and that the genesis file is setup correctly
demo-onechaind validate-genesis

if [[ $1 == "pending" ]]; then
  echo "pending mode is on, please wait for the first block committed."
fi

# Start the node (remove the --pruning=nothing flag if historical queries are not needed)
demo-onechaind start --pruning=nothing --log_level $LOGLEVEL --minimum-gas-prices=0.0001och
