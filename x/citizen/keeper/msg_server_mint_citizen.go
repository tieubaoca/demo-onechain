package keeper

import (
	"context"

	"demo-onechain/x/citizen/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) MintCitizen(goCtx context.Context, msg *types.MsgMintCitizen) (*types.MsgMintCitizenResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	if _, found := k.GetCitizen(ctx, msg.CitizenId); found {
		return nil, status.Errorf(codes.AlreadyExists, "Citizen already exists")
	}
	if len(msg.To) == 0 || len(msg.CitizenId) == 0 {
		return nil, status.Error(codes.InvalidArgument, "invalid argument")
	}
	_, err := sdk.AccAddressFromBech32(msg.To)
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, "invalid argument")
	}
	// TODO: Handling the message
	citizen := types.Citizen{
		CitizenId: msg.CitizenId,
		Metadata: &types.Metadata{
			Title:       msg.Title,
			Description: msg.Description,
			Uri:         msg.Uri,
			Author:      msg.Creator,
			CreateTime:  ctx.BlockTime().Unix(),
		},
		Assets: []sdk.Coin{},
	}

	k.AppendCitizenIds(ctx, types.CitizenIds{
		CitizenIds: citizen.CitizenId,
	})

	k.AppendCitizensOwned(ctx, msg.To, citizen.CitizenId)

	k.SetCitizenOwner(ctx, types.CitizenOwner{
		CitizenId: citizen.CitizenId,
		Owner:     msg.To,
	})

	k.SetCitizen(ctx, citizen)

	return &types.MsgMintCitizenResponse{Citizen: &citizen}, nil
}
