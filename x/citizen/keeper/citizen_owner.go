package keeper

import (
	"demo-onechain/x/citizen/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetCitizenOwner set a specific citizenOwner in the store from its index
func (k Keeper) SetCitizenOwner(ctx sdk.Context, citizenOwner types.CitizenOwner) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenOwnerKeyPrefix))
	b := k.cdc.MustMarshal(&citizenOwner)
	store.Set(types.CitizenOwnerKey(
		citizenOwner.CitizenId,
	), b)
}

// GetCitizenOwner returns a citizenOwner from its index
func (k Keeper) GetCitizenOwner(
	ctx sdk.Context,
	citizenId string,

) (val types.CitizenOwner, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenOwnerKeyPrefix))

	b := store.Get(types.CitizenOwnerKey(
		citizenId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCitizenOwner removes a citizenOwner from the store
func (k Keeper) RemoveCitizenOwner(
	ctx sdk.Context,
	citizenId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenOwnerKeyPrefix))
	store.Delete(types.CitizenOwnerKey(
		citizenId,
	))
}

// GetAllCitizenOwner returns all citizenOwner
func (k Keeper) GetAllCitizenOwner(ctx sdk.Context) (list []types.CitizenOwner) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenOwnerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CitizenOwner
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
