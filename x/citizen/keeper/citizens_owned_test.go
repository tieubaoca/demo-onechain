package keeper_test

import (
	"strconv"
	"testing"

	keepertest "demo-onechain/testutil/keeper"
	"demo-onechain/testutil/nullify"
	"demo-onechain/x/citizen/keeper"
	"demo-onechain/x/citizen/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNCitizensOwned(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CitizensOwned {
	items := make([]types.CitizensOwned, n)
	for i := range items {
		items[i].Owner = strconv.Itoa(i)

		keeper.SetCitizensOwned(ctx, items[i])
	}
	return items
}

func TestCitizensOwnedGet(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizensOwned(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCitizensOwned(ctx,
			item.Owner,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCitizensOwnedRemove(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizensOwned(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCitizensOwned(ctx,
			item.Owner,
		)
		_, found := keeper.GetCitizensOwned(ctx,
			item.Owner,
		)
		require.False(t, found)
	}
}

func TestCitizensOwnedGetAll(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizensOwned(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCitizensOwned(ctx)),
	)
}
