/* eslint-disable */
import { Params } from "../citizen/params";
import { Owner } from "../citizen/owner";
import { Citizen } from "../citizen/citizen";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "demoonechain.citizen";

/** GenesisState defines the citizen module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  owner: Owner | undefined;
  /** this line is used by starport scaffolding # genesis/proto/state */
  citizenList: Citizen[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.citizenList) {
      Citizen.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.citizenList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.owner = Owner.decode(reader, reader.uint32());
          break;
        case 3:
          message.citizenList.push(Citizen.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.citizenList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Owner.fromJSON(object.owner);
    } else {
      message.owner = undefined;
    }
    if (object.citizenList !== undefined && object.citizenList !== null) {
      for (const e of object.citizenList) {
        message.citizenList.push(Citizen.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.owner !== undefined &&
      (obj.owner = message.owner ? Owner.toJSON(message.owner) : undefined);
    if (message.citizenList) {
      obj.citizenList = message.citizenList.map((e) =>
        e ? Citizen.toJSON(e) : undefined
      );
    } else {
      obj.citizenList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.citizenList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Owner.fromPartial(object.owner);
    } else {
      message.owner = undefined;
    }
    if (object.citizenList !== undefined && object.citizenList !== null) {
      for (const e of object.citizenList) {
        message.citizenList.push(Citizen.fromPartial(e));
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
