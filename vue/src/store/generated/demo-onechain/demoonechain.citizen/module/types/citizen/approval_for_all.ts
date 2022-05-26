/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "demoonechain.citizen";

export interface ApprovalForAll {
  owner: string;
  operators: string;
}

const baseApprovalForAll: object = { owner: "", operators: "" };

export const ApprovalForAll = {
  encode(message: ApprovalForAll, writer: Writer = Writer.create()): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.operators !== "") {
      writer.uint32(18).string(message.operators);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ApprovalForAll {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApprovalForAll } as ApprovalForAll;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.operators = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApprovalForAll {
    const message = { ...baseApprovalForAll } as ApprovalForAll;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.operators !== undefined && object.operators !== null) {
      message.operators = String(object.operators);
    } else {
      message.operators = "";
    }
    return message;
  },

  toJSON(message: ApprovalForAll): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.operators !== undefined && (obj.operators = message.operators);
    return obj;
  },

  fromPartial(object: DeepPartial<ApprovalForAll>): ApprovalForAll {
    const message = { ...baseApprovalForAll } as ApprovalForAll;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.operators !== undefined && object.operators !== null) {
      message.operators = object.operators;
    } else {
      message.operators = "";
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
