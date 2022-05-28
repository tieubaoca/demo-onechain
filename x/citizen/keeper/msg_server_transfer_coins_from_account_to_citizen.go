package keeper

import (
	"context"

	"demo-onechain/x/citizen/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) TransferCoinsFromAccountToCitizen(goCtx context.Context, msg *types.MsgTransferCoinsFromAccountToCitizen) (*types.MsgTransferCoinsFromAccountToCitizenResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message

	from, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, "From is not a valid address")
	}

	citizen, found := k.GetCitizen(ctx, msg.To)
	if !found {
		return nil, status.Error(codes.NotFound, "Citizen does not exist")
	}

	k.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, msg.Amounts)

	for _, amount := range msg.Amounts {
		for i, coin := range citizen.Assets {
			if amount.Denom == coin.Denom {
				citizen.Assets[i] = citizen.Assets[i].AddAmount(amount.Amount)
				amount.Amount = sdk.ZeroInt()
			}
		}

		if !amount.Amount.IsZero() {
			citizen.Assets = append(citizen.Assets, amount)
		}
	}

	k.SetCitizen(ctx, citizen)

	return &types.MsgTransferCoinsFromAccountToCitizenResponse{}, nil
}
