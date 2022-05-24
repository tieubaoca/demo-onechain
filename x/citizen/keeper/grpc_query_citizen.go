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

func (k Keeper) CitizenAll(c context.Context, req *types.QueryAllCitizenRequest) (*types.QueryAllCitizenResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var citizens []types.Citizen
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	citizenStore := prefix.NewStore(store, types.KeyPrefix(types.CitizenKeyPrefix))

	pageRes, err := query.Paginate(citizenStore, req.Pagination, func(key []byte, value []byte) error {
		var citizen types.Citizen
		if err := k.cdc.Unmarshal(value, &citizen); err != nil {
			return err
		}

		citizens = append(citizens, citizen)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCitizenResponse{Citizen: citizens, Pagination: pageRes}, nil
}

func (k Keeper) Citizen(c context.Context, req *types.QueryGetCitizenRequest) (*types.QueryGetCitizenResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCitizen(
		ctx,
		req.CitizenId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCitizenResponse{Citizen: val}, nil
}
