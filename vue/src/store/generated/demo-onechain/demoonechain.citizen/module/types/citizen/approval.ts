/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "demoonechain.citizen";

export interface Approval {
  citizenId: string;
  operator: string;
}

const baseApproval: object = { citizenId: "", operator: "" };

export const Approval = {
  encode(message: Approval, writer: Writer = Writer.create()): Writer {
    if (message.citizenId !== "") {
      writer.uint32(10).string(message.citizenId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Approval {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApproval } as Approval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.citizenId = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Approval {
    const message = { ...baseApproval } as Approval;
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = String(object.citizenId);
    } else {
      message.citizenId = "";
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = String(object.operator);
    } else {
      message.operator = "";
    }
    return message;
  },

  toJSON(message: Approval): unknown {
    const obj: any = {};
    message.citizenId !== undefined && (obj.citizenId = message.citizenId);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },

  fromPartial(object: DeepPartial<Approval>): Approval {
    const message = { ...baseApproval } as Approval;
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = object.citizenId;
    } else {
      message.citizenId = "";
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    } else {
      message.operator = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
