package simulation

import (
	"math/rand"

	"demo-onechain/x/citizen/keeper"
	"demo-onechain/x/citizen/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgSetApproveForAll(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgSetApproveForAll{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the SetApproveForAll simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "SetApproveForAll simulation not implemented"), nil, nil
	}
}
