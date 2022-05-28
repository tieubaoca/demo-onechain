package cli

import (
	"strconv"

	"demo-onechain/x/citizen/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdTransferCoinsFromAccountToCitizen() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "transfer-coins-from-account-to-citizen [from] [to] [amounts]",
		Short: "Broadcast message transfer-coins-from-account-to-citizen",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFrom := args[0]
			argTo := args[1]
			argAmounts, err := sdk.ParseCoinsNormalized(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgTransferCoinsFromAccountToCitizen(
				clientCtx.GetFromAddress().String(),
				argFrom,
				argTo,
				argAmounts,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
