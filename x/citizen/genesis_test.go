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

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CitizenKeeper(t)
	citizen.InitGenesis(ctx, *k, genesisState)
	got := citizen.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
