package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ApprovalKeyPrefix is the prefix to retrieve all Approval
	ApprovalKeyPrefix = "Approval/value/"
)

// ApprovalKey returns the store key to retrieve a Approval from the index fields
func ApprovalKey(
	citizenId string,
) []byte {
	var key []byte

	citizenIdBytes := []byte(citizenId)
	key = append(key, citizenIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
