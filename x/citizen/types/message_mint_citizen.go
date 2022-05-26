package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMintCitizen = "mint_citizen"

var _ sdk.Msg = &MsgMintCitizen{}

func NewMsgMintCitizen(creator string, to string, citizenId string, title string, description string, uri string) *MsgMintCitizen {
	return &MsgMintCitizen{
		Creator:     creator,
		To:          to,
		CitizenId:   citizenId,
		Title:       title,
		Description: description,
		Uri:         uri,
	}
}

func (msg *MsgMintCitizen) Route() string {
	return RouterKey
}

func (msg *MsgMintCitizen) Type() string {
	return TypeMsgMintCitizen
}

func (msg *MsgMintCitizen) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMintCitizen) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMintCitizen) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
