package keeper

import (
	"demo-onechain/x/citizen/types"
)

var _ types.QueryServer = Keeper{}
