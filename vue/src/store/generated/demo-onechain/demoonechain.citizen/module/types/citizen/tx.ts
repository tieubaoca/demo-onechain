/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "demoonechain.citizen";

export interface MsgTransferOwnership {
  creator: string;
  newOwner: string;
}

export interface MsgTransferOwnershipResponse {}

const baseMsgTransferOwnership: object = { creator: "", newOwner: "" };

export const MsgTransferOwnership = {
  encode(
    message: MsgTransferOwnership,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.newOwner !== "") {
      writer.uint32(18).string(message.newOwner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferOwnership {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferOwnership } as MsgTransferOwnership;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferOwnership {
    const message = { ...baseMsgTransferOwnership } as MsgTransferOwnership;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = String(object.newOwner);
    } else {
      message.newOwner = "";
    }
    return message;
  },

  toJSON(message: MsgTransferOwnership): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransferOwnership>): MsgTransferOwnership {
    const message = { ...baseMsgTransferOwnership } as MsgTransferOwnership;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner;
    } else {
      message.newOwner = "";
    }
    return message;
  },
};

const baseMsgTransferOwnershipResponse: object = {};

export const MsgTransferOwnershipResponse = {
  encode(
    _: MsgTransferOwnershipResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgTransferOwnershipResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTransferOwnershipResponse,
    } as MsgTransferOwnershipResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTransferOwnershipResponse {
    const message = {
      ...baseMsgTransferOwnershipResponse,
    } as MsgTransferOwnershipResponse;
    return message;
  },

  toJSON(_: MsgTransferOwnershipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgTransferOwnershipResponse>
  ): MsgTransferOwnershipResponse {
    const message = {
      ...baseMsgTransferOwnershipResponse,
    } as MsgTransferOwnershipResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  TransferOwnership(
    request: MsgTransferOwnership
  ): Promise<MsgTransferOwnershipResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  TransferOwnership(
    request: MsgTransferOwnership
  ): Promise<MsgTransferOwnershipResponse> {
    const data = MsgTransferOwnership.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Msg",
      "TransferOwnership",
      data
    );
    return promise.then((data) =>
      MsgTransferOwnershipResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
