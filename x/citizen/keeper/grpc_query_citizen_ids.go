package keeper

import (
	"context"

	"demo-onechain/x/citizen/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CitizenIdsAll(c context.Context, req *types.QueryAllCitizenIdsRequest) (*types.QueryAllCitizenIdsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var citizenIdss []types.CitizenIds
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	citizenIdsStore := prefix.NewStore(store, types.KeyPrefix(types.CitizenIdsKey))

	pageRes, err := query.Paginate(citizenIdsStore, req.Pagination, func(key []byte, value []byte) error {
		var citizenIds types.CitizenIds
		if err := k.cdc.Unmarshal(value, &citizenIds); err != nil {
			return err
		}

		citizenIdss = append(citizenIdss, citizenIds)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCitizenIdsResponse{CitizenIds: citizenIdss, Pagination: pageRes}, nil
}

func (k Keeper) CitizenIds(c context.Context, req *types.QueryGetCitizenIdsRequest) (*types.QueryGetCitizenIdsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	citizenIds, found := k.GetCitizenIds(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetCitizenIdsResponse{CitizenIds: citizenIds}, nil
}
