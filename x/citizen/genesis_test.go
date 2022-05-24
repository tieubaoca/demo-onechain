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
	// this line is used by starport scaffolding # genesis/test/assert
}
