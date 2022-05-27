package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetApproveForAll = "set_approve_for_all"

var _ sdk.Msg = &MsgSetApproveForAll{}

func NewMsgSetApproveForAll(creator string, operator string, isApproveForAll bool) *MsgSetApproveForAll {
	return &MsgSetApproveForAll{
		Creator:         creator,
		Operator:        operator,
		IsApproveForAll: isApproveForAll,
	}
}

func (msg *MsgSetApproveForAll) Route() string {
	return RouterKey
}

func (msg *MsgSetApproveForAll) Type() string {
	return TypeMsgSetApproveForAll
}

func (msg *MsgSetApproveForAll) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSetApproveForAll) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetApproveForAll) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
