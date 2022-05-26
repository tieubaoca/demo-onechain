package keeper

import (
	"demo-onechain/x/citizen/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetApproval set a specific approval in the store from its index
func (k Keeper) SetApproval(ctx sdk.Context, approval types.Approval) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApprovalKeyPrefix))
	b := k.cdc.MustMarshal(&approval)
	store.Set(types.ApprovalKey(
		approval.CitizenId,
	), b)
}

// GetApproval returns a approval from its index
func (k Keeper) GetApproval(
	ctx sdk.Context,
	citizenId string,

) (val types.Approval, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApprovalKeyPrefix))

	b := store.Get(types.ApprovalKey(
		citizenId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveApproval removes a approval from the store
func (k Keeper) RemoveApproval(
	ctx sdk.Context,
	citizenId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApprovalKeyPrefix))
	store.Delete(types.ApprovalKey(
		citizenId,
	))
}

// GetAllApproval returns all approval
func (k Keeper) GetAllApproval(ctx sdk.Context) (list []types.Approval) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApprovalKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Approval
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
