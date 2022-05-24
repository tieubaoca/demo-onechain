package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "demo-onechain/testutil/keeper"
	"demo-onechain/testutil/nullify"
	"demo-onechain/x/citizen/keeper"
	"demo-onechain/x/citizen/types"
)

func createTestOwner(keeper *keeper.Keeper, ctx sdk.Context) types.Owner {
	item := types.Owner{}
	keeper.SetOwner(ctx, item)
	return item
}

func TestOwnerGet(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	item := createTestOwner(keeper, ctx)
	rst, found := keeper.GetOwner(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestOwnerRemove(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	createTestOwner(keeper, ctx)
	keeper.RemoveOwner(ctx)
	_, found := keeper.GetOwner(ctx)
	require.False(t, found)
}
