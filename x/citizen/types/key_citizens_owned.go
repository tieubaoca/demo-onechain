package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CitizensOwnedKeyPrefix is the prefix to retrieve all CitizensOwned
	CitizensOwnedKeyPrefix = "CitizensOwned/value/"
)

// CitizensOwnedKey returns the store key to retrieve a CitizensOwned from the index fields
func CitizensOwnedKey(
	owner string,
) []byte {
	var key []byte

	ownerBytes := []byte(owner)
	key = append(key, ownerBytes...)
	key = append(key, []byte("/")...)

	return key
}
