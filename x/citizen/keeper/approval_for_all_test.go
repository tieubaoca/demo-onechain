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

func createNApprovalForAll(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ApprovalForAll {
	items := make([]types.ApprovalForAll, n)
	for i := range items {
		items[i].Owner = strconv.Itoa(i)

		keeper.SetApprovalForAll(ctx, items[i])
	}
	return items
}

func TestApprovalForAllGet(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNApprovalForAll(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetApprovalForAll(ctx,
			item.Owner,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestApprovalForAllRemove(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNApprovalForAll(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveApprovalForAll(ctx,
			item.Owner,
		)
		_, found := keeper.GetApprovalForAll(ctx,
			item.Owner,
		)
		require.False(t, found)
	}
}

func TestApprovalForAllGetAll(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNApprovalForAll(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllApprovalForAll(ctx)),
	)
}
