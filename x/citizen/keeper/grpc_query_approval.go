package keeper

import (
	"context"

	"demo-onechain/x/citizen/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ApprovalAll(c context.Context, req *types.QueryAllApprovalRequest) (*types.QueryAllApprovalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var approvals []types.Approval
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	approvalStore := prefix.NewStore(store, types.KeyPrefix(types.ApprovalKeyPrefix))

	pageRes, err := query.Paginate(approvalStore, req.Pagination, func(key []byte, value []byte) error {
		var approval types.Approval
		if err := k.cdc.Unmarshal(value, &approval); err != nil {
			return err
		}

		approvals = append(approvals, approval)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllApprovalResponse{Approval: approvals, Pagination: pageRes}, nil
}

func (k Keeper) Approval(c context.Context, req *types.QueryGetApprovalRequest) (*types.QueryGetApprovalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetApproval(
		ctx,
		req.CitizenId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetApprovalResponse{Approval: val}, nil
}
