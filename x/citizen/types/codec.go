package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgTransferOwnership{}, "citizen/TransferOwnership", nil)
	cdc.RegisterConcrete(&MsgMintCitizen{}, "citizen/MintCitizen", nil)
	cdc.RegisterConcrete(&MsgApprove{}, "citizen/Approve", nil)
	cdc.RegisterConcrete(&MsgSetApproveForAll{}, "citizen/SetApproveForAll", nil)
	cdc.RegisterConcrete(&MsgTransfer{}, "citizen/Transfer", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgTransferOwnership{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMintCitizen{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgApprove{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSetApproveForAll{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgTransfer{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
