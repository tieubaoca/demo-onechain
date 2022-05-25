package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		Owner:            &Owner{Owner: "onechain1hfs42grvajp3d77x7zsf349atctzh0cql3tuhf"},
		CitizenList:      []Citizen{},
		CitizenOwnerList: []CitizenOwner{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in citizen
	citizenIndexMap := make(map[string]struct{})

	for _, elem := range gs.CitizenList {
		index := string(CitizenKey(elem.CitizenId))
		if _, ok := citizenIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for citizen")
		}
		citizenIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in citizenOwner
	citizenOwnerIndexMap := make(map[string]struct{})

	for _, elem := range gs.CitizenOwnerList {
		index := string(CitizenOwnerKey(elem.CitizenId))
		if _, ok := citizenOwnerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for citizenOwner")
		}
		citizenOwnerIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
