package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ApprovalForAllKeyPrefix is the prefix to retrieve all ApprovalForAll
	ApprovalForAllKeyPrefix = "ApprovalForAll/value/"
)

// ApprovalForAllKey returns the store key to retrieve a ApprovalForAll from the index fields
func ApprovalForAllKey(
	owner string,
) []byte {
	var key []byte

	ownerBytes := []byte(owner)
	key = append(key, ownerBytes...)
	key = append(key, []byte("/")...)

	return key
}
