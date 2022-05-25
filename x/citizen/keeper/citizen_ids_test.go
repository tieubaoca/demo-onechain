package keeper_test

import (
	"testing"

	keepertest "demo-onechain/testutil/keeper"
	"demo-onechain/testutil/nullify"
	"demo-onechain/x/citizen/keeper"
	"demo-onechain/x/citizen/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNCitizenIds(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CitizenIds {
	items := make([]types.CitizenIds, n)
	for i := range items {
		items[i].Id = keeper.AppendCitizenIds(ctx, items[i])
	}
	return items
}

func TestCitizenIdsGet(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizenIds(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCitizenIds(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestCitizenIdsRemove(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizenIds(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCitizenIds(ctx, item.Id)
		_, found := keeper.GetCitizenIds(ctx, item.Id)
		require.False(t, found)
	}
}

func TestCitizenIdsGetAll(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizenIds(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCitizenIds(ctx)),
	)
}

func TestCitizenIdsCount(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizenIds(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetCitizenIdsCount(ctx))
}
