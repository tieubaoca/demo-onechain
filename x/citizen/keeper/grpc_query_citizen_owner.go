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

func (k Keeper) CitizenOwnerAll(c context.Context, req *types.QueryAllCitizenOwnerRequest) (*types.QueryAllCitizenOwnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var citizenOwners []types.CitizenOwner
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	citizenOwnerStore := prefix.NewStore(store, types.KeyPrefix(types.CitizenOwnerKeyPrefix))

	pageRes, err := query.Paginate(citizenOwnerStore, req.Pagination, func(key []byte, value []byte) error {
		var citizenOwner types.CitizenOwner
		if err := k.cdc.Unmarshal(value, &citizenOwner); err != nil {
			return err
		}

		citizenOwners = append(citizenOwners, citizenOwner)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCitizenOwnerResponse{CitizenOwner: citizenOwners, Pagination: pageRes}, nil
}

func (k Keeper) CitizenOwner(c context.Context, req *types.QueryGetCitizenOwnerRequest) (*types.QueryGetCitizenOwnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCitizenOwner(
		ctx,
		req.CitizenId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCitizenOwnerResponse{CitizenOwner: val}, nil
}
