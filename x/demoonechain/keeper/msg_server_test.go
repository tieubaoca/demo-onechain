package keeper_test

import (
	"context"
	"testing"

	keepertest "demo-onechain/testutil/keeper"
	"demo-onechain/x/demoonechain/keeper"
	"demo-onechain/x/demoonechain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.DemoonechainKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
