package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		Owner:              &Owner{Owner: "onechain1hfs42grvajp3d77x7zsf349atctzh0cql3tuhf"},
		CitizenList:        []Citizen{},
		CitizenOwnerList:   []CitizenOwner{},
		CitizenIdsList:     []CitizenIds{},
		CitizensOwnedList:  []CitizensOwned{},
		ApprovalList:       []Approval{},
		ApprovalForAllList: []ApprovalForAll{},
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
	// Check for duplicated ID in citizenIds
	citizenIdsIdMap := make(map[uint64]bool)
	citizenIdsCount := gs.GetCitizenIdsCount()
	for _, elem := range gs.CitizenIdsList {
		if _, ok := citizenIdsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for citizenIds")
		}
		if elem.Id >= citizenIdsCount {
			return fmt.Errorf("citizenIds id should be lower or equal than the last id")
		}
		citizenIdsIdMap[elem.Id] = true
	}
	// Check for duplicated index in citizensOwned
	citizensOwnedIndexMap := make(map[string]struct{})

	for _, elem := range gs.CitizensOwnedList {
		index := string(CitizensOwnedKey(elem.Owner))
		if _, ok := citizensOwnedIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for citizensOwned")
		}
		citizensOwnedIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in approval
	approvalIndexMap := make(map[string]struct{})

	for _, elem := range gs.ApprovalList {
		index := string(ApprovalKey(elem.CitizenId))
		if _, ok := approvalIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for approval")
		}
		approvalIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in approvalForAll
	approvalForAllIndexMap := make(map[string]struct{})

	for _, elem := range gs.ApprovalForAllList {
		index := string(ApprovalForAllKey(elem.Owner))
		if _, ok := approvalForAllIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for approvalForAll")
		}
		approvalForAllIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
