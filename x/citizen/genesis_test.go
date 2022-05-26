package citizen_test

import (
	"testing"

	keepertest "demo-onechain/testutil/keeper"
	"demo-onechain/testutil/nullify"
	"demo-onechain/x/citizen"
	"demo-onechain/x/citizen/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		Owner: &types.Owner{
			Owner: "49",
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
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CitizenKeeper(t)
	citizen.InitGenesis(ctx, *k, genesisState)
	got := citizen.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.Owner, got.Owner)
	require.ElementsMatch(t, genesisState.CitizenList, got.CitizenList)
	require.ElementsMatch(t, genesisState.CitizenOwnerList, got.CitizenOwnerList)
	require.ElementsMatch(t, genesisState.CitizenIdsList, got.CitizenIdsList)
	require.Equal(t, genesisState.CitizenIdsCount, got.CitizenIdsCount)
	require.ElementsMatch(t, genesisState.CitizensOwnedList, got.CitizensOwnedList)
	require.ElementsMatch(t, genesisState.ApprovalList, got.ApprovalList)
	require.ElementsMatch(t, genesisState.ApprovalForAllList, got.ApprovalForAllList)
	// this line is used by starport scaffolding # genesis/test/assert
}
