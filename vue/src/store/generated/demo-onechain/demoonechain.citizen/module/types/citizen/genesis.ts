/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../citizen/params";
import { Owner } from "../citizen/owner";
import { Citizen } from "../citizen/citizen";
import { CitizenOwner } from "../citizen/citizen_owner";
import { CitizenIds } from "../citizen/citizen_ids";
import { CitizensOwned } from "../citizen/citizens_owned";

export const protobufPackage = "demoonechain.citizen";

/** GenesisState defines the citizen module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  owner: Owner | undefined;
  citizenList: Citizen[];
  citizenOwnerList: CitizenOwner[];
  citizenIdsList: CitizenIds[];
  citizenIdsCount: number;
  /** this line is used by starport scaffolding # genesis/proto/state */
  citizensOwnedList: CitizensOwned[];
}

const baseGenesisState: object = { citizenIdsCount: 0 };

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
    for (const v of message.citizenOwnerList) {
      CitizenOwner.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.citizenIdsList) {
      CitizenIds.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.citizenIdsCount !== 0) {
      writer.uint32(48).uint64(message.citizenIdsCount);
    }
    for (const v of message.citizensOwnedList) {
      CitizensOwned.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.citizenList = [];
    message.citizenOwnerList = [];
    message.citizenIdsList = [];
    message.citizensOwnedList = [];
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
        case 4:
          message.citizenOwnerList.push(
            CitizenOwner.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.citizenIdsList.push(
            CitizenIds.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.citizenIdsCount = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.citizensOwnedList.push(
            CitizensOwned.decode(reader, reader.uint32())
          );
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
    message.citizenOwnerList = [];
    message.citizenIdsList = [];
    message.citizensOwnedList = [];
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
    if (
      object.citizenOwnerList !== undefined &&
      object.citizenOwnerList !== null
    ) {
      for (const e of object.citizenOwnerList) {
        message.citizenOwnerList.push(CitizenOwner.fromJSON(e));
      }
    }
    if (object.citizenIdsList !== undefined && object.citizenIdsList !== null) {
      for (const e of object.citizenIdsList) {
        message.citizenIdsList.push(CitizenIds.fromJSON(e));
      }
    }
    if (
      object.citizenIdsCount !== undefined &&
      object.citizenIdsCount !== null
    ) {
      message.citizenIdsCount = Number(object.citizenIdsCount);
    } else {
      message.citizenIdsCount = 0;
    }
    if (
      object.citizensOwnedList !== undefined &&
      object.citizensOwnedList !== null
    ) {
      for (const e of object.citizensOwnedList) {
        message.citizensOwnedList.push(CitizensOwned.fromJSON(e));
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
    if (message.citizenOwnerList) {
      obj.citizenOwnerList = message.citizenOwnerList.map((e) =>
        e ? CitizenOwner.toJSON(e) : undefined
      );
    } else {
      obj.citizenOwnerList = [];
    }
    if (message.citizenIdsList) {
      obj.citizenIdsList = message.citizenIdsList.map((e) =>
        e ? CitizenIds.toJSON(e) : undefined
      );
    } else {
      obj.citizenIdsList = [];
    }
    message.citizenIdsCount !== undefined &&
      (obj.citizenIdsCount = message.citizenIdsCount);
    if (message.citizensOwnedList) {
      obj.citizensOwnedList = message.citizensOwnedList.map((e) =>
        e ? CitizensOwned.toJSON(e) : undefined
      );
    } else {
      obj.citizensOwnedList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.citizenList = [];
    message.citizenOwnerList = [];
    message.citizenIdsList = [];
    message.citizensOwnedList = [];
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
    if (
      object.citizenOwnerList !== undefined &&
      object.citizenOwnerList !== null
    ) {
      for (const e of object.citizenOwnerList) {
        message.citizenOwnerList.push(CitizenOwner.fromPartial(e));
      }
    }
    if (object.citizenIdsList !== undefined && object.citizenIdsList !== null) {
      for (const e of object.citizenIdsList) {
        message.citizenIdsList.push(CitizenIds.fromPartial(e));
      }
    }
    if (
      object.citizenIdsCount !== undefined &&
      object.citizenIdsCount !== null
    ) {
      message.citizenIdsCount = object.citizenIdsCount;
    } else {
      message.citizenIdsCount = 0;
    }
    if (
      object.citizensOwnedList !== undefined &&
      object.citizensOwnedList !== null
    ) {
      for (const e of object.citizensOwnedList) {
        message.citizensOwnedList.push(CitizensOwned.fromPartial(e));
      }
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
