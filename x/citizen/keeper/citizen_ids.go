package keeper

import (
	"encoding/binary"

	"demo-onechain/x/citizen/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetCitizenIdsCount get the total number of citizenIds
func (k Keeper) GetCitizenIdsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CitizenIdsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCitizenIdsCount set the total number of citizenIds
func (k Keeper) SetCitizenIdsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CitizenIdsCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCitizenIds appends a citizenIds in the store with a new id and update the count
func (k Keeper) AppendCitizenIds(
	ctx sdk.Context,
	citizenIds types.CitizenIds,
) uint64 {
	// Create the citizenIds
	count := k.GetCitizenIdsCount(ctx)

	// Set the ID of the appended value
	citizenIds.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenIdsKey))
	appendedValue := k.cdc.MustMarshal(&citizenIds)
	store.Set(GetCitizenIdsIDBytes(citizenIds.Id), appendedValue)

	// Update citizenIds count
	k.SetCitizenIdsCount(ctx, count+1)

	return count
}

// SetCitizenIds set a specific citizenIds in the store
func (k Keeper) SetCitizenIds(ctx sdk.Context, citizenIds types.CitizenIds) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenIdsKey))
	b := k.cdc.MustMarshal(&citizenIds)
	store.Set(GetCitizenIdsIDBytes(citizenIds.Id), b)
}

// GetCitizenIds returns a citizenIds from its id
func (k Keeper) GetCitizenIds(ctx sdk.Context, id uint64) (val types.CitizenIds, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenIdsKey))
	b := store.Get(GetCitizenIdsIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCitizenIds removes a citizenIds from the store
func (k Keeper) RemoveCitizenIds(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenIdsKey))
	store.Delete(GetCitizenIdsIDBytes(id))
}

// GetAllCitizenIds returns all citizenIds
func (k Keeper) GetAllCitizenIds(ctx sdk.Context) (list []types.CitizenIds) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CitizenIdsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CitizenIds
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCitizenIdsIDBytes returns the byte representation of the ID
func GetCitizenIdsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCitizenIdsIDFromBytes returns ID in uint64 format from a byte array
func GetCitizenIdsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
