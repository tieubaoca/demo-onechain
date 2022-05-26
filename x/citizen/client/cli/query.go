package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"demo-onechain/x/citizen/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group citizen queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdShowOwner())
	cmd.AddCommand(CmdModuleOwner())

	cmd.AddCommand(CmdListCitizen())
	cmd.AddCommand(CmdShowCitizen())
	cmd.AddCommand(CmdListCitizenOwner())
	cmd.AddCommand(CmdShowCitizenOwner())
	cmd.AddCommand(CmdListCitizenIds())
	cmd.AddCommand(CmdShowCitizenIds())
	cmd.AddCommand(CmdListCitizensOwned())
	cmd.AddCommand(CmdShowCitizensOwned())
	cmd.AddCommand(CmdListApproval())
	cmd.AddCommand(CmdShowApproval())
	cmd.AddCommand(CmdListApprovalForAll())
	cmd.AddCommand(CmdShowApprovalForAll())
	// this line is used by starport scaffolding # 1

	return cmd
}
