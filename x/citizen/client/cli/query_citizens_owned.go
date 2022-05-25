package cli

import (
	"context"

	"demo-onechain/x/citizen/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListCitizensOwned() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-citizens-owned",
		Short: "list all citizens-owned",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllCitizensOwnedRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.CitizensOwnedAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowCitizensOwned() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-citizens-owned [owner]",
		Short: "shows a citizens-owned",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argOwner := args[0]

			params := &types.QueryGetCitizensOwnedRequest{
				Owner: argOwner,
			}

			res, err := queryClient.CitizensOwned(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
