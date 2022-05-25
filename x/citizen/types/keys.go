package types

const (
	// ModuleName defines the module name
	ModuleName = "citizen"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_citizen"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	OwnerKey = "Owner-value-"
)

const (
	CitizenIdsKey      = "CitizenIds-value-"
	CitizenIdsCountKey = "CitizenIds-count-"
)
