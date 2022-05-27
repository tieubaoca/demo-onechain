package keeper

import (
	"demo-onechain/x/citizen/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetApprovalForAll set a specific approvalForAll in the store from its index
func (k Keeper) SetApprovalForAll(ctx sdk.Context, approvalForAll types.ApprovalForAll) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApprovalForAllKeyPrefix))
	b := k.cdc.MustMarshal(&approvalForAll)
	store.Set(types.ApprovalForAllKey(
		approvalForAll.Owner,
	), b)
}

// GetApprovalForAll returns a approvalForAll from its index
func (k Keeper) GetApprovalForAll(
	ctx sdk.Context,
	owner string,

) (val types.ApprovalForAll, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApprovalForAllKeyPrefix))

	b := store.Get(types.ApprovalForAllKey(
		owner,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveApprovalForAll removes a approvalForAll from the store
func (k Keeper) RemoveApprovalForAll(
	ctx sdk.Context,
	owner string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApprovalForAllKeyPrefix))
	store.Delete(types.ApprovalForAllKey(
		owner,
	))
}

// GetAllApprovalForAll returns all approvalForAll
func (k Keeper) GetAllApprovalForAll(ctx sdk.Context) (list []types.ApprovalForAll) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApprovalForAllKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ApprovalForAll
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) FindOpearator(ctx sdk.Context, owner string, operator string) (int, bool) {
	operators, found := k.GetApprovalForAll(ctx, owner)
	if !found {
		return 0, false
	}
	for i, op := range operators.Operators {
		if op == operator {
			return i, true
		}
	}
	return 0, false
}
