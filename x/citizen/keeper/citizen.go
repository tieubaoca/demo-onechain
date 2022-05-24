package keeper

import (
	"demo-onechain/x/citizen/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetCitizen set a specific citizen in the store from its index
func (k Keeper) SetCitizen(ctx sdk.Context, citizen types.Citizen) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenKeyPrefix))
	b := k.cdc.MustMarshal(&citizen)
	store.Set(types.CitizenKey(
		citizen.CitizenId,
	), b)
}

// GetCitizen returns a citizen from its index
func (k Keeper) GetCitizen(
	ctx sdk.Context,
	citizenId string,

) (val types.Citizen, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenKeyPrefix))

	b := store.Get(types.CitizenKey(
		citizenId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCitizen removes a citizen from the store
func (k Keeper) RemoveCitizen(
	ctx sdk.Context,
	citizenId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenKeyPrefix))
	store.Delete(types.CitizenKey(
		citizenId,
	))
}

// GetAllCitizen returns all citizen
func (k Keeper) GetAllCitizen(ctx sdk.Context) (list []types.Citizen) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Citizen
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
