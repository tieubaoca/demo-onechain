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

func createNCitizenOwner(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CitizenOwner {
	items := make([]types.CitizenOwner, n)
	for i := range items {
		items[i].CitizenId = strconv.Itoa(i)

		keeper.SetCitizenOwner(ctx, items[i])
	}
	return items
}

func TestCitizenOwnerGet(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizenOwner(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCitizenOwner(ctx,
			item.CitizenId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCitizenOwnerRemove(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizenOwner(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCitizenOwner(ctx,
			item.CitizenId,
		)
		_, found := keeper.GetCitizenOwner(ctx,
			item.CitizenId,
		)
		require.False(t, found)
	}
}

func TestCitizenOwnerGetAll(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizenOwner(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCitizenOwner(ctx)),
	)
}
