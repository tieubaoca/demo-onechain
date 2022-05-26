package keeper

import (
	"demo-onechain/x/citizen/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// SetCitizensOwned set a specific citizensOwned in the store from its index
func (k Keeper) SetCitizensOwned(ctx sdk.Context, citizensOwned types.CitizensOwned) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizensOwnedKeyPrefix))
	b := k.cdc.MustMarshal(&citizensOwned)
	store.Set(types.CitizensOwnedKey(
		citizensOwned.Owner,
	), b)
}

// GetCitizensOwned returns a citizensOwned from its index
func (k Keeper) GetCitizensOwned(
	ctx sdk.Context,
	owner string,

) (val types.CitizensOwned, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizensOwnedKeyPrefix))

	b := store.Get(types.CitizensOwnedKey(
		owner,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCitizensOwned removes a citizensOwned from the store
func (k Keeper) RemoveCitizensOwned(
	ctx sdk.Context,
	owner string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizensOwnedKeyPrefix))
	store.Delete(types.CitizensOwnedKey(
		owner,
	))
}

// GetAllCitizensOwned returns all citizensOwned
func (k Keeper) GetAllCitizensOwned(ctx sdk.Context) (list []types.CitizensOwned) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizensOwnedKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CitizensOwned
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) AppendCitizensOwned(ctx sdk.Context, owner string, newCitizenId string) {
	citizenIdsOwned, found := k.GetCitizensOwned(ctx, owner)
	if !found {
		k.SetCitizensOwned(ctx, types.CitizensOwned{Owner: owner, CitizenIds: []string{newCitizenId}})
		return
	}
	citizenIdsOwned.CitizenIds = append(citizenIdsOwned.CitizenIds, newCitizenId)
	k.SetCitizensOwned(ctx, citizenIdsOwned)
}

func (k Keeper) TruncateCitizensOwned(ctx sdk.Context, owner string, citizenId string) (*types.CitizensOwned, error) {
	citizenOwned, found := k.GetCitizensOwned(ctx, owner)
	if !found {
		return nil, status.Error(codes.NotFound, "CitizensOwned not found")
	}
	for i, v := range citizenOwned.CitizenIds {
		if v == citizenId {
			citizenOwned.CitizenIds = append(citizenOwned.CitizenIds[:i], citizenOwned.CitizenIds[i+1:]...)
			k.SetCitizensOwned(ctx, citizenOwned)
			return &citizenOwned, nil
		}
	}
	return nil, status.Error(codes.NotFound, "CitizenId not found")
}
