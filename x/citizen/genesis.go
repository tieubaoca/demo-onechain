package citizen

import (
	"demo-onechain/x/citizen/keeper"
	"demo-onechain/x/citizen/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.Owner != nil {
		k.SetOwner(ctx, *genState.Owner)
	}
	// Set all the citizen
	for _, elem := range genState.CitizenList {
		k.SetCitizen(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all owner
	owner, found := k.GetOwner(ctx)
	if found {
		genesis.Owner = &owner
	}
	genesis.CitizenList = k.GetAllCitizen(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
