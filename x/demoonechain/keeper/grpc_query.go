package keeper

import (
	"demo-onechain/x/demoonechain/types"
)

var _ types.QueryServer = Keeper{}
