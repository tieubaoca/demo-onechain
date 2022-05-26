package cli

import (
	"strconv"

	"demo-onechain/x/citizen/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdMintCitizen() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "mint-citizen [to] [citizen-id] [title] [description] [uri]",
		Short: "Broadcast message mint-citizen",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTo := args[0]
			argCitizenId := args[1]
			argTitle := args[2]
			argDescription := args[3]
			argUri := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMintCitizen(
				clientCtx.GetFromAddress().String(),
				argTo,
				argCitizenId,
				argTitle,
				argDescription,
				argUri,
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
