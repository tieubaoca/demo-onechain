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

func createNApproval(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Approval {
	items := make([]types.Approval, n)
	for i := range items {
		items[i].CitizenId = strconv.Itoa(i)

		keeper.SetApproval(ctx, items[i])
	}
	return items
}

func TestApprovalGet(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNApproval(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetApproval(ctx,
			item.CitizenId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestApprovalRemove(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNApproval(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveApproval(ctx,
			item.CitizenId,
		)
		_, found := keeper.GetApproval(ctx,
			item.CitizenId,
		)
		require.False(t, found)
	}
}

func TestApprovalGetAll(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNApproval(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllApproval(ctx)),
	)
}
