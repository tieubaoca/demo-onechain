package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgTransferCoinsFromAccountToCitizen = "transfer_coins_from_account_to_citizen"

var _ sdk.Msg = &MsgTransferCoinsFromAccountToCitizen{}

func NewMsgTransferCoinsFromAccountToCitizen(creator string, from string, to string, amounts sdk.Coins) *MsgTransferCoinsFromAccountToCitizen {
	return &MsgTransferCoinsFromAccountToCitizen{
		Creator: creator,
		From:    from,
		To:      to,
		Amounts: amounts,
	}
}

func (msg *MsgTransferCoinsFromAccountToCitizen) Route() string {
	return RouterKey
}

func (msg *MsgTransferCoinsFromAccountToCitizen) Type() string {
	return TypeMsgTransferCoinsFromAccountToCitizen
}

func (msg *MsgTransferCoinsFromAccountToCitizen) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgTransferCoinsFromAccountToCitizen) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgTransferCoinsFromAccountToCitizen) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
