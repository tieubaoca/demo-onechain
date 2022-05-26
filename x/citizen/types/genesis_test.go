package types_test

import (
	"testing"

	"demo-onechain/x/citizen/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				Owner: &types.Owner{
					Owner: "43",
				},
				CitizenList: []types.Citizen{
					{
						CitizenId: "0",
					},
					{
						CitizenId: "1",
					},
				},
				CitizenOwnerList: []types.CitizenOwner{
					{
						CitizenId: "0",
					},
					{
						CitizenId: "1",
					},
				},
				CitizenIdsList: []types.CitizenIds{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				CitizenIdsCount: 2,
				CitizensOwnedList: []types.CitizensOwned{
					{
						Owner: "0",
					},
					{
						Owner: "1",
					},
				},
				ApprovalList: []types.Approval{
					{
						CitizenId: "0",
					},
					{
						CitizenId: "1",
					},
				},
				ApprovalForAllList: []types.ApprovalForAll{
					{
						Owner: "0",
					},
					{
						Owner: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated citizen",
			genState: &types.GenesisState{
				CitizenList: []types.Citizen{
					{
						CitizenId: "0",
					},
					{
						CitizenId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated citizenOwner",
			genState: &types.GenesisState{
				CitizenOwnerList: []types.CitizenOwner{
					{
						CitizenId: "0",
					},
					{
						CitizenId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated citizenIds",
			genState: &types.GenesisState{
				CitizenIdsList: []types.CitizenIds{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid citizenIds count",
			genState: &types.GenesisState{
				CitizenIdsList: []types.CitizenIds{
					{
						Id: 1,
					},
				},
				CitizenIdsCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated citizensOwned",
			genState: &types.GenesisState{
				CitizensOwnedList: []types.CitizensOwned{
					{
						Owner: "0",
					},
					{
						Owner: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated approval",
			genState: &types.GenesisState{
				ApprovalList: []types.Approval{
					{
						CitizenId: "0",
					},
					{
						CitizenId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated approvalForAll",
			genState: &types.GenesisState{
				ApprovalForAllList: []types.ApprovalForAll{
					{
						Owner: "0",
					},
					{
						Owner: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
