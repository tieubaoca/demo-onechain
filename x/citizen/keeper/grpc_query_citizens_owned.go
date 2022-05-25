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

func (k Keeper) CitizensOwnedAll(c context.Context, req *types.QueryAllCitizensOwnedRequest) (*types.QueryAllCitizensOwnedResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var citizensOwneds []types.CitizensOwned
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	citizensOwnedStore := prefix.NewStore(store, types.KeyPrefix(types.CitizensOwnedKeyPrefix))

	pageRes, err := query.Paginate(citizensOwnedStore, req.Pagination, func(key []byte, value []byte) error {
		var citizensOwned types.CitizensOwned
		if err := k.cdc.Unmarshal(value, &citizensOwned); err != nil {
			return err
		}

		citizensOwneds = append(citizensOwneds, citizensOwned)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCitizensOwnedResponse{CitizensOwned: citizensOwneds, Pagination: pageRes}, nil
}

func (k Keeper) CitizensOwned(c context.Context, req *types.QueryGetCitizensOwnedRequest) (*types.QueryGetCitizensOwnedResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCitizensOwned(
		ctx,
		req.Owner,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCitizensOwnedResponse{CitizensOwned: val}, nil
}
