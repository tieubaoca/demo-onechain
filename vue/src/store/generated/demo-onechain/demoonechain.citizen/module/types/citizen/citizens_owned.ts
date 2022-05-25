/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "demoonechain.citizen";

export interface CitizensOwned {
  owner: string;
  citizenIds: string[];
}

const baseCitizensOwned: object = { owner: "", citizenIds: "" };

export const CitizensOwned = {
  encode(message: CitizensOwned, writer: Writer = Writer.create()): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.citizenIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CitizensOwned {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCitizensOwned } as CitizensOwned;
    message.citizenIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.citizenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CitizensOwned {
    const message = { ...baseCitizensOwned } as CitizensOwned;
    message.citizenIds = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.citizenIds !== undefined && object.citizenIds !== null) {
      for (const e of object.citizenIds) {
        message.citizenIds.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: CitizensOwned): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.citizenIds) {
      obj.citizenIds = message.citizenIds.map((e) => e);
    } else {
      obj.citizenIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CitizensOwned>): CitizensOwned {
    const message = { ...baseCitizensOwned } as CitizensOwned;
    message.citizenIds = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.citizenIds !== undefined && object.citizenIds !== null) {
      for (const e of object.citizenIds) {
        message.citizenIds.push(e);
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
