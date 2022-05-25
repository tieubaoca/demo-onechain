/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "demoonechain.citizen";

export interface CitizenOwner {
  citizenId: string;
  owner: string;
}

const baseCitizenOwner: object = { citizenId: "", owner: "" };

export const CitizenOwner = {
  encode(message: CitizenOwner, writer: Writer = Writer.create()): Writer {
    if (message.citizenId !== "") {
      writer.uint32(10).string(message.citizenId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CitizenOwner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCitizenOwner } as CitizenOwner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.citizenId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CitizenOwner {
    const message = { ...baseCitizenOwner } as CitizenOwner;
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = String(object.citizenId);
    } else {
      message.citizenId = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: CitizenOwner): unknown {
    const obj: any = {};
    message.citizenId !== undefined && (obj.citizenId = message.citizenId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<CitizenOwner>): CitizenOwner {
    const message = { ...baseCitizenOwner } as CitizenOwner;
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = object.citizenId;
    } else {
      message.citizenId = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
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
