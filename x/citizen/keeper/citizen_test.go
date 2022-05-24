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

func createNCitizen(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Citizen {
	items := make([]types.Citizen, n)
	for i := range items {
		items[i].CitizenId = strconv.Itoa(i)

		keeper.SetCitizen(ctx, items[i])
	}
	return items
}

func TestCitizenGet(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizen(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCitizen(ctx,
			item.CitizenId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCitizenRemove(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizen(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCitizen(ctx,
			item.CitizenId,
		)
		_, found := keeper.GetCitizen(ctx,
			item.CitizenId,
		)
		require.False(t, found)
	}
}

func TestCitizenGetAll(t *testing.T) {
	keeper, ctx := keepertest.CitizenKeeper(t)
	items := createNCitizen(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCitizen(ctx)),
	)
}
