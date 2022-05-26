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

func (k Keeper) ApprovalForAllAll(c context.Context, req *types.QueryAllApprovalForAllRequest) (*types.QueryAllApprovalForAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var approvalForAlls []types.ApprovalForAll
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	approvalForAllStore := prefix.NewStore(store, types.KeyPrefix(types.ApprovalForAllKeyPrefix))

	pageRes, err := query.Paginate(approvalForAllStore, req.Pagination, func(key []byte, value []byte) error {
		var approvalForAll types.ApprovalForAll
		if err := k.cdc.Unmarshal(value, &approvalForAll); err != nil {
			return err
		}

		approvalForAlls = append(approvalForAlls, approvalForAll)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllApprovalForAllResponse{ApprovalForAll: approvalForAlls, Pagination: pageRes}, nil
}

func (k Keeper) ApprovalForAll(c context.Context, req *types.QueryGetApprovalForAllRequest) (*types.QueryGetApprovalForAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetApprovalForAll(
		ctx,
		req.Owner,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetApprovalForAllResponse{ApprovalForAll: val}, nil
}
