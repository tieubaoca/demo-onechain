package cli

import (
	"context"

	"demo-onechain/x/citizen/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListCitizenOwner() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-citizen-owner",
		Short: "list all citizen-owner",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllCitizenOwnerRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.CitizenOwnerAll(context.Background(), params)
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

func CmdShowCitizenOwner() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-citizen-owner [citizen-id]",
		Short: "shows a citizen-owner",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argCitizenId := args[0]

			params := &types.QueryGetCitizenOwnerRequest{
				CitizenId: argCitizenId,
			}

			res, err := queryClient.CitizenOwner(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
