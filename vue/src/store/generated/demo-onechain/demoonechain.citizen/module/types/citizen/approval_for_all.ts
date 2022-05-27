/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "demoonechain.citizen";

export interface ApprovalForAll {
  owner: string;
  operators: string[];
}

const baseApprovalForAll: object = { owner: "", operators: "" };

export const ApprovalForAll = {
  encode(message: ApprovalForAll, writer: Writer = Writer.create()): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.operators) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ApprovalForAll {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApprovalForAll } as ApprovalForAll;
    message.operators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.operators.push(reader.string());
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
    message.operators = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.operators !== undefined && object.operators !== null) {
      for (const e of object.operators) {
        message.operators.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ApprovalForAll): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.operators) {
      obj.operators = message.operators.map((e) => e);
    } else {
      obj.operators = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ApprovalForAll>): ApprovalForAll {
    const message = { ...baseApprovalForAll } as ApprovalForAll;
    message.operators = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.operators !== undefined && object.operators !== null) {
      for (const e of object.operators) {
        message.operators.push(e);
      }
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
