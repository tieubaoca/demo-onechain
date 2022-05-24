/* eslint-disable */
import { Metadata } from "../citizen/metadata";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "demoonechain.citizen";

export interface Citizen {
  citizenId: string;
  metadata: Metadata | undefined;
  assets: Coin[];
}

const baseCitizen: object = { citizenId: "" };

export const Citizen = {
  encode(message: Citizen, writer: Writer = Writer.create()): Writer {
    if (message.citizenId !== "") {
      writer.uint32(10).string(message.citizenId);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.assets) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Citizen {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCitizen } as Citizen;
    message.assets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.citizenId = reader.string();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.assets.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Citizen {
    const message = { ...baseCitizen } as Citizen;
    message.assets = [];
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = String(object.citizenId);
    } else {
      message.citizenId = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.assets !== undefined && object.assets !== null) {
      for (const e of object.assets) {
        message.assets.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Citizen): unknown {
    const obj: any = {};
    message.citizenId !== undefined && (obj.citizenId = message.citizenId);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Citizen>): Citizen {
    const message = { ...baseCitizen } as Citizen;
    message.assets = [];
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = object.citizenId;
    } else {
      message.citizenId = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.assets !== undefined && object.assets !== null) {
      for (const e of object.assets) {
        message.assets.push(Coin.fromPartial(e));
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
