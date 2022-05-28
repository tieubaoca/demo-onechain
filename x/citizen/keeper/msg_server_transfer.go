package keeper

import (
	"context"

	"demo-onechain/x/citizen/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) Transfer(goCtx context.Context, msg *types.MsgTransfer) (*types.MsgTransferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	if _, err := sdk.AccAddressFromBech32(msg.To); err != nil {
		return nil, status.Error(codes.InvalidArgument, "invalid argument")
	}
	if _, err := sdk.AccAddressFromBech32(msg.From); err != nil {
		return nil, status.Error(codes.InvalidArgument, "invalid argument")
	}
	owner, found := k.GetCitizenOwner(ctx, msg.CitizenId)
	if !found {
		return nil, status.Error(codes.NotFound, "citizen does not exist")
	}
	if owner.Owner != msg.From {
		return nil, status.Error(codes.PermissionDenied, "address from does not own this citizen")
	}
	if msg.Creator != msg.From {
		_, found := k.FindOpearator(ctx, msg.From, msg.Creator)
		operator, _ := k.GetApproval(ctx, msg.CitizenId)
		if !found && operator.Operator != msg.Creator {
			return nil, status.Error(codes.PermissionDenied, "Not approval")
		}
	}

	k.RemoveApproval(ctx, msg.CitizenId)
	k.SetCitizenOwner(ctx, types.CitizenOwner{CitizenId: msg.CitizenId, Owner: msg.To})
	k.TruncateCitizensOwned(ctx, msg.From, msg.CitizenId)
	k.AppendCitizensOwned(ctx, msg.To, msg.CitizenId)

	return &types.MsgTransferResponse{}, nil
}
