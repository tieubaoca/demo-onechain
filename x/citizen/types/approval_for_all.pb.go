// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: citizen/approval_for_all.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type ApprovalForAll struct {
	Owner     string `protobuf:"bytes,1,opt,name=owner,proto3" json:"owner,omitempty"`
	Operators string `protobuf:"bytes,2,opt,name=operators,proto3" json:"operators,omitempty"`
}

func (m *ApprovalForAll) Reset()         { *m = ApprovalForAll{} }
func (m *ApprovalForAll) String() string { return proto.CompactTextString(m) }
func (*ApprovalForAll) ProtoMessage()    {}
func (*ApprovalForAll) Descriptor() ([]byte, []int) {
	return fileDescriptor_a5b28e5e5acbc601, []int{0}
}
func (m *ApprovalForAll) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ApprovalForAll) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ApprovalForAll.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ApprovalForAll) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ApprovalForAll.Merge(m, src)
}
func (m *ApprovalForAll) XXX_Size() int {
	return m.Size()
}
func (m *ApprovalForAll) XXX_DiscardUnknown() {
	xxx_messageInfo_ApprovalForAll.DiscardUnknown(m)
}

var xxx_messageInfo_ApprovalForAll proto.InternalMessageInfo

func (m *ApprovalForAll) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

func (m *ApprovalForAll) GetOperators() string {
	if m != nil {
		return m.Operators
	}
	return ""
}

func init() {
	proto.RegisterType((*ApprovalForAll)(nil), "demoonechain.citizen.ApprovalForAll")
}

func init() { proto.RegisterFile("citizen/approval_for_all.proto", fileDescriptor_a5b28e5e5acbc601) }

var fileDescriptor_a5b28e5e5acbc601 = []byte{
	// 173 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4b, 0xce, 0x2c, 0xc9,
	0xac, 0x4a, 0xcd, 0xd3, 0x4f, 0x2c, 0x28, 0x28, 0xca, 0x2f, 0x4b, 0xcc, 0x89, 0x4f, 0xcb, 0x2f,
	0x8a, 0x4f, 0xcc, 0xc9, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x49, 0x49, 0xcd, 0xcd,
	0xcf, 0xcf, 0x4b, 0x4d, 0xce, 0x48, 0xcc, 0xcc, 0xd3, 0x83, 0x2a, 0x56, 0x72, 0xe1, 0xe2, 0x73,
	0x84, 0xaa, 0x77, 0xcb, 0x2f, 0x72, 0xcc, 0xc9, 0x11, 0x12, 0xe1, 0x62, 0xcd, 0x2f, 0xcf, 0x4b,
	0x2d, 0x92, 0x60, 0x54, 0x60, 0xd4, 0xe0, 0x0c, 0x82, 0x70, 0x84, 0x64, 0xb8, 0x38, 0xf3, 0x0b,
	0x52, 0x8b, 0x12, 0x4b, 0xf2, 0x8b, 0x8a, 0x25, 0x98, 0xc0, 0x32, 0x08, 0x01, 0x27, 0xf3, 0x13,
	0x8f, 0xe4, 0x18, 0x2f, 0x3c, 0x92, 0x63, 0x7c, 0xf0, 0x48, 0x8e, 0x71, 0xc2, 0x63, 0x39, 0x86,
	0x0b, 0x8f, 0xe5, 0x18, 0x6e, 0x3c, 0x96, 0x63, 0x88, 0x92, 0x05, 0xd9, 0xaa, 0x0b, 0xb3, 0x56,
	0xbf, 0x42, 0x1f, 0xe6, 0xca, 0x92, 0xca, 0x82, 0xd4, 0xe2, 0x24, 0x36, 0xb0, 0xdb, 0x8c, 0x01,
	0x01, 0x00, 0x00, 0xff, 0xff, 0xf2, 0x14, 0x19, 0x88, 0xbd, 0x00, 0x00, 0x00,
}

func (m *ApprovalForAll) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ApprovalForAll) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ApprovalForAll) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Operators) > 0 {
		i -= len(m.Operators)
		copy(dAtA[i:], m.Operators)
		i = encodeVarintApprovalForAll(dAtA, i, uint64(len(m.Operators)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintApprovalForAll(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintApprovalForAll(dAtA []byte, offset int, v uint64) int {
	offset -= sovApprovalForAll(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ApprovalForAll) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovApprovalForAll(uint64(l))
	}
	l = len(m.Operators)
	if l > 0 {
		n += 1 + l + sovApprovalForAll(uint64(l))
	}
	return n
}

func sovApprovalForAll(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozApprovalForAll(x uint64) (n int) {
	return sovApprovalForAll(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ApprovalForAll) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowApprovalForAll
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ApprovalForAll: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ApprovalForAll: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApprovalForAll
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthApprovalForAll
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthApprovalForAll
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Owner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Operators", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApprovalForAll
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthApprovalForAll
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthApprovalForAll
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Operators = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipApprovalForAll(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthApprovalForAll
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipApprovalForAll(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowApprovalForAll
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowApprovalForAll
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowApprovalForAll
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthApprovalForAll
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupApprovalForAll
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthApprovalForAll
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthApprovalForAll        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowApprovalForAll          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupApprovalForAll = fmt.Errorf("proto: unexpected end of group")
)
