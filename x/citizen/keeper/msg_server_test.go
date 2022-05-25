package keeper_test

import (
	"context"
	"testing"

	keepertest "demo-onechain/testutil/keeper"
	"demo-onechain/x/citizen/keeper"
	"demo-onechain/x/citizen/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CitizenKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
