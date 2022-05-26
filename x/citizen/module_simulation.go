package citizen

import (
	"math/rand"

	"demo-onechain/testutil/sample"
	citizensimulation "demo-onechain/x/citizen/simulation"
	"demo-onechain/x/citizen/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = citizensimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgTransferOwnership = "op_weight_msg_transfer_ownership"
	// TODO: Determine the simulation weight value
	defaultWeightMsgTransferOwnership int = 100

	opWeightMsgMintCitizen = "op_weight_msg_mint_citizen"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMintCitizen int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	citizenGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&citizenGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgTransferOwnership int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgTransferOwnership, &weightMsgTransferOwnership, nil,
		func(_ *rand.Rand) {
			weightMsgTransferOwnership = defaultWeightMsgTransferOwnership
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgTransferOwnership,
		citizensimulation.SimulateMsgTransferOwnership(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMintCitizen int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMintCitizen, &weightMsgMintCitizen, nil,
		func(_ *rand.Rand) {
			weightMsgMintCitizen = defaultWeightMsgMintCitizen
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMintCitizen,
		citizensimulation.SimulateMsgMintCitizen(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
