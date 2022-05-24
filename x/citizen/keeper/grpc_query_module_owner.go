package keeper

import (
	"context"

	"demo-onechain/x/citizen/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ModuleOwner(goCtx context.Context, req *types.QueryModuleOwnerRequest) (*types.QueryModuleOwnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	owner, found := k.GetOwner(ctx)

	if !found {
		return nil, status.Error(codes.NotFound, "owner not found")
	}

	return &types.QueryModuleOwnerResponse{Owner: owner.Owner}, nil
}
