package keeper

import (
	"context"

	"demo-onechain/x/citizen/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) TransferOwnership(goCtx context.Context, msg *types.MsgTransferOwnership) (*types.MsgTransferOwnershipResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	if !k.IsOwner(ctx, msg.Creator) {
		return nil, status.Error(codes.PermissionDenied, "Not owner")
	}

	k.SetOwner(ctx, types.Owner{Owner: msg.NewOwner})

	return &types.MsgTransferOwnershipResponse{}, nil
}
