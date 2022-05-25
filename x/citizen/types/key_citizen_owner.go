package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CitizenOwnerKeyPrefix is the prefix to retrieve all CitizenOwner
	CitizenOwnerKeyPrefix = "CitizenOwner/value/"
)

// CitizenOwnerKey returns the store key to retrieve a CitizenOwner from the index fields
func CitizenOwnerKey(
	citizenId string,
) []byte {
	var key []byte

	citizenIdBytes := []byte(citizenId)
	key = append(key, citizenIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
