package keeper_test

import (
	"testing"

	testkeeper "demo-onechain/testutil/keeper"
	"demo-onechain/x/citizen/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.CitizenKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
