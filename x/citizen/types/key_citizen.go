package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CitizenKeyPrefix is the prefix to retrieve all Citizen
	CitizenKeyPrefix = "Citizen/value/"
)

// CitizenKey returns the store key to retrieve a Citizen from the index fields
func CitizenKey(
	citizenId string,
) []byte {
	var key []byte

	citizenIdBytes := []byte(citizenId)
	key = append(key, citizenIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
