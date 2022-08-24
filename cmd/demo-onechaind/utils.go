package main

import (
	"fmt"
	"path/filepath"

	"github.com/cosmos/go-bip39"
	cfg "github.com/tendermint/tendermint/config"
	tmsecp256k1 "github.com/tendermint/tendermint/crypto/secp256k1"
	tmos "github.com/tendermint/tendermint/libs/os"
	"github.com/tendermint/tendermint/p2p"
	"github.com/tendermint/tendermint/privval"

	cryptocodec "github.com/cosmos/cosmos-sdk/crypto/codec"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
)

// InitializeNodeValidatorFiles creates private validator and p2p configuration files using the given mnemonic.
// If no valid mnemonic is given, a random one will be used instead.
func InitializeNodeValidatorFilesFromMnemonic(config *cfg.Config, mnemonic string) (nodeID string, valPubKey cryptotypes.PubKey, err error) {
	if len(mnemonic) > 0 && !bip39.IsMnemonicValid(mnemonic) {
		return "", nil, fmt.Errorf("invalid mnemonic")
	}

	nodeKey, err := LoadOrGenNodeKey(config.NodeKeyFile())
	if err != nil {
		return "", nil, err
	}

	nodeID = string(nodeKey.ID())

	pvKeyFile := config.PrivValidatorKeyFile()
	if err := tmos.EnsureDir(filepath.Dir(pvKeyFile), 0777); err != nil {
		return "", nil, err
	}

	pvStateFile := config.PrivValidatorStateFile()
	if err := tmos.EnsureDir(filepath.Dir(pvStateFile), 0777); err != nil {
		return "", nil, err
	}

	var filePV *privval.FilePV
	if len(mnemonic) == 0 {
		fmt.Println("Gen private key")
		privKey := tmsecp256k1.GenPrivKey()
		filePV = privval.NewFilePV(privKey, pvKeyFile, pvStateFile)
	} else {
		fmt.Println("Recover private key")
		privKey := tmsecp256k1.GenPrivKeySecp256k1([]byte(mnemonic))
		filePV = privval.NewFilePV(privKey, pvKeyFile, pvStateFile)
	}
	filePV.Save()
	tmValPubKey, err := filePV.GetPubKey()

	fmt.Println(filePV.String())
	fmt.Println(tmValPubKey.Type())
	if err != nil {
		return "", nil, err
	}

	valPubKey, err = cryptocodec.FromTmPubKeyInterface(tmValPubKey)
	if err != nil {
		return "", nil, err
	}

	return nodeID, valPubKey, nil
}

// LoadOrGenNodeKey attempts to load the NodeKey from the given filePath. If
// the file does not exist, it generates and saves a new NodeKey.
func LoadOrGenNodeKey(filePath string) (*p2p.NodeKey, error) {
	if tmos.FileExists(filePath) {
		nodeKey, err := p2p.LoadNodeKey(filePath)
		if err != nil {
			return nil, err
		}
		return nodeKey, nil
	}

	privKey := tmsecp256k1.GenPrivKey()
	nodeKey := &p2p.NodeKey{
		PrivKey: privKey,
	}

	if err := nodeKey.SaveAs(filePath); err != nil {
		return nil, err
	}

	return nodeKey, nil
}
