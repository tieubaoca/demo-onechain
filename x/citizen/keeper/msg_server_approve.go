package keeper

import (
	"context"

	"demo-onechain/x/citizen/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) Approve(goCtx context.Context, msg *types.MsgApprove) (*types.MsgApproveResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	if _, err := sdk.AccAddressFromBech32(msg.Operator); err != nil {
		return nil, status.Error(codes.InvalidArgument, "invalid argument")
	}
	if owner, _ := k.GetCitizenOwner(ctx, msg.CitizenId); owner.Owner != msg.Creator {
		return nil, status.Error(codes.PermissionDenied, "Caller is not owner")
	}
	// TODO: Handling the message
	approval := types.Approval{
		CitizenId: msg.CitizenId,
		Operator:  msg.Operator,
	}
	if msg.IsApproval {
		k.SetApproval(ctx, approval)
	} else {
		k.RemoveApproval(ctx, msg.CitizenId)
	}

	return &types.MsgApproveResponse{}, nil
}
