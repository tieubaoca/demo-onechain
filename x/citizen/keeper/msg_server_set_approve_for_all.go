package keeper

import (
	"context"

	"demo-onechain/x/citizen/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) SetApproveForAll(goCtx context.Context, msg *types.MsgSetApproveForAll) (*types.MsgSetApproveForAllResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	if _, err := sdk.AccAddressFromBech32(msg.Operator); err != nil {
		return nil, status.Error(codes.InvalidArgument, "invalid argument")
	}
	if msg.Operator == msg.Creator {
		return nil, status.Error(codes.InvalidArgument, "approve to caller")
	}
	// TODO: Handling the message
	operators, found := k.GetApprovalForAll(ctx, msg.Creator)
	if !found {
		operators = types.ApprovalForAll{
			Owner:     msg.Creator,
			Operators: []string{},
		}
	}
	index, found := k.FindOpearator(ctx, msg.Creator, msg.Operator)
	if msg.IsApproveForAll && !found {
		operators.Operators = append(operators.Operators, msg.Operator)
	} else if !msg.IsApproveForAll && found {
		operators.Operators = append(operators.Operators[:index], operators.Operators[index+1:]...)
		if len(operators.Operators) == 0 {
			k.RemoveApprovalForAll(ctx, msg.Creator)
			return &types.MsgSetApproveForAllResponse{}, nil
		}
	}

	k.SetApprovalForAll(ctx, operators)
	return &types.MsgSetApproveForAllResponse{}, nil
}
