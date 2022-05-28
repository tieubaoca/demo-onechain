/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Citizen } from "../citizen/citizen";

export const protobufPackage = "demoonechain.citizen";

export interface MsgTransferOwnership {
  creator: string;
  newOwner: string;
}

export interface MsgTransferOwnershipResponse {}

export interface MsgMintCitizen {
  creator: string;
  to: string;
  citizenId: string;
  title: string;
  description: string;
  uri: string;
}

export interface MsgMintCitizenResponse {
  citizen: Citizen | undefined;
}

export interface MsgApprove {
  creator: string;
  citizenId: string;
  operator: string;
  isApproval: boolean;
}

export interface MsgApproveResponse {}

export interface MsgSetApproveForAll {
  creator: string;
  operator: string;
  isApproveForAll: boolean;
}

export interface MsgSetApproveForAllResponse {}

export interface MsgTransfer {
  creator: string;
  from: string;
  to: string;
  citizenId: string;
}

export interface MsgTransferResponse {}

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

const baseMsgMintCitizen: object = {
  creator: "",
  to: "",
  citizenId: "",
  title: "",
  description: "",
  uri: "",
};

export const MsgMintCitizen = {
  encode(message: MsgMintCitizen, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.citizenId !== "") {
      writer.uint32(26).string(message.citizenId);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(50).string(message.uri);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintCitizen {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintCitizen } as MsgMintCitizen;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.citizenId = reader.string();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintCitizen {
    const message = { ...baseMsgMintCitizen } as MsgMintCitizen;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = String(object.citizenId);
    } else {
      message.citizenId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    return message;
  },

  toJSON(message: MsgMintCitizen): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.to !== undefined && (obj.to = message.to);
    message.citizenId !== undefined && (obj.citizenId = message.citizenId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintCitizen>): MsgMintCitizen {
    const message = { ...baseMsgMintCitizen } as MsgMintCitizen;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = object.citizenId;
    } else {
      message.citizenId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    return message;
  },
};

const baseMsgMintCitizenResponse: object = {};

export const MsgMintCitizenResponse = {
  encode(
    message: MsgMintCitizenResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.citizen !== undefined) {
      Citizen.encode(message.citizen, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintCitizenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintCitizenResponse } as MsgMintCitizenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.citizen = Citizen.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintCitizenResponse {
    const message = { ...baseMsgMintCitizenResponse } as MsgMintCitizenResponse;
    if (object.citizen !== undefined && object.citizen !== null) {
      message.citizen = Citizen.fromJSON(object.citizen);
    } else {
      message.citizen = undefined;
    }
    return message;
  },

  toJSON(message: MsgMintCitizenResponse): unknown {
    const obj: any = {};
    message.citizen !== undefined &&
      (obj.citizen = message.citizen
        ? Citizen.toJSON(message.citizen)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgMintCitizenResponse>
  ): MsgMintCitizenResponse {
    const message = { ...baseMsgMintCitizenResponse } as MsgMintCitizenResponse;
    if (object.citizen !== undefined && object.citizen !== null) {
      message.citizen = Citizen.fromPartial(object.citizen);
    } else {
      message.citizen = undefined;
    }
    return message;
  },
};

const baseMsgApprove: object = {
  creator: "",
  citizenId: "",
  operator: "",
  isApproval: false,
};

export const MsgApprove = {
  encode(message: MsgApprove, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.citizenId !== "") {
      writer.uint32(18).string(message.citizenId);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    if (message.isApproval === true) {
      writer.uint32(32).bool(message.isApproval);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApprove {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApprove } as MsgApprove;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.citizenId = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        case 4:
          message.isApproval = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApprove {
    const message = { ...baseMsgApprove } as MsgApprove;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.isApproval !== undefined && object.isApproval !== null) {
      message.isApproval = Boolean(object.isApproval);
    } else {
      message.isApproval = false;
    }
    return message;
  },

  toJSON(message: MsgApprove): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.citizenId !== undefined && (obj.citizenId = message.citizenId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.isApproval !== undefined && (obj.isApproval = message.isApproval);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgApprove>): MsgApprove {
    const message = { ...baseMsgApprove } as MsgApprove;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.isApproval !== undefined && object.isApproval !== null) {
      message.isApproval = object.isApproval;
    } else {
      message.isApproval = false;
    }
    return message;
  },
};

const baseMsgApproveResponse: object = {};

export const MsgApproveResponse = {
  encode(_: MsgApproveResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApproveResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApproveResponse } as MsgApproveResponse;
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

  fromJSON(_: any): MsgApproveResponse {
    const message = { ...baseMsgApproveResponse } as MsgApproveResponse;
    return message;
  },

  toJSON(_: MsgApproveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgApproveResponse>): MsgApproveResponse {
    const message = { ...baseMsgApproveResponse } as MsgApproveResponse;
    return message;
  },
};

const baseMsgSetApproveForAll: object = {
  creator: "",
  operator: "",
  isApproveForAll: false,
};

export const MsgSetApproveForAll = {
  encode(
    message: MsgSetApproveForAll,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.isApproveForAll === true) {
      writer.uint32(24).bool(message.isApproveForAll);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetApproveForAll {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetApproveForAll } as MsgSetApproveForAll;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.isApproveForAll = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetApproveForAll {
    const message = { ...baseMsgSetApproveForAll } as MsgSetApproveForAll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = String(object.operator);
    } else {
      message.operator = "";
    }
    if (
      object.isApproveForAll !== undefined &&
      object.isApproveForAll !== null
    ) {
      message.isApproveForAll = Boolean(object.isApproveForAll);
    } else {
      message.isApproveForAll = false;
    }
    return message;
  },

  toJSON(message: MsgSetApproveForAll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.operator !== undefined && (obj.operator = message.operator);
    message.isApproveForAll !== undefined &&
      (obj.isApproveForAll = message.isApproveForAll);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetApproveForAll>): MsgSetApproveForAll {
    const message = { ...baseMsgSetApproveForAll } as MsgSetApproveForAll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    } else {
      message.operator = "";
    }
    if (
      object.isApproveForAll !== undefined &&
      object.isApproveForAll !== null
    ) {
      message.isApproveForAll = object.isApproveForAll;
    } else {
      message.isApproveForAll = false;
    }
    return message;
  },
};

const baseMsgSetApproveForAllResponse: object = {};

export const MsgSetApproveForAllResponse = {
  encode(
    _: MsgSetApproveForAllResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetApproveForAllResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetApproveForAllResponse,
    } as MsgSetApproveForAllResponse;
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

  fromJSON(_: any): MsgSetApproveForAllResponse {
    const message = {
      ...baseMsgSetApproveForAllResponse,
    } as MsgSetApproveForAllResponse;
    return message;
  },

  toJSON(_: MsgSetApproveForAllResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetApproveForAllResponse>
  ): MsgSetApproveForAllResponse {
    const message = {
      ...baseMsgSetApproveForAllResponse,
    } as MsgSetApproveForAllResponse;
    return message;
  },
};

const baseMsgTransfer: object = {
  creator: "",
  from: "",
  to: "",
  citizenId: "",
};

export const MsgTransfer = {
  encode(message: MsgTransfer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.citizenId !== "") {
      writer.uint32(34).string(message.citizenId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransfer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransfer } as MsgTransfer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.citizenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransfer {
    const message = { ...baseMsgTransfer } as MsgTransfer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = String(object.citizenId);
    } else {
      message.citizenId = "";
    }
    return message;
  },

  toJSON(message: MsgTransfer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.citizenId !== undefined && (obj.citizenId = message.citizenId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransfer>): MsgTransfer {
    const message = { ...baseMsgTransfer } as MsgTransfer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = object.citizenId;
    } else {
      message.citizenId = "";
    }
    return message;
  },
};

const baseMsgTransferResponse: object = {};

export const MsgTransferResponse = {
  encode(_: MsgTransferResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferResponse } as MsgTransferResponse;
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

  fromJSON(_: any): MsgTransferResponse {
    const message = { ...baseMsgTransferResponse } as MsgTransferResponse;
    return message;
  },

  toJSON(_: MsgTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgTransferResponse>): MsgTransferResponse {
    const message = { ...baseMsgTransferResponse } as MsgTransferResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  TransferOwnership(
    request: MsgTransferOwnership
  ): Promise<MsgTransferOwnershipResponse>;
  MintCitizen(request: MsgMintCitizen): Promise<MsgMintCitizenResponse>;
  Approve(request: MsgApprove): Promise<MsgApproveResponse>;
  SetApproveForAll(
    request: MsgSetApproveForAll
  ): Promise<MsgSetApproveForAllResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
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

  MintCitizen(request: MsgMintCitizen): Promise<MsgMintCitizenResponse> {
    const data = MsgMintCitizen.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Msg",
      "MintCitizen",
      data
    );
    return promise.then((data) =>
      MsgMintCitizenResponse.decode(new Reader(data))
    );
  }

  Approve(request: MsgApprove): Promise<MsgApproveResponse> {
    const data = MsgApprove.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Msg",
      "Approve",
      data
    );
    return promise.then((data) => MsgApproveResponse.decode(new Reader(data)));
  }

  SetApproveForAll(
    request: MsgSetApproveForAll
  ): Promise<MsgSetApproveForAllResponse> {
    const data = MsgSetApproveForAll.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Msg",
      "SetApproveForAll",
      data
    );
    return promise.then((data) =>
      MsgSetApproveForAllResponse.decode(new Reader(data))
    );
  }

  Transfer(request: MsgTransfer): Promise<MsgTransferResponse> {
    const data = MsgTransfer.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Msg",
      "Transfer",
      data
    );
    return promise.then((data) => MsgTransferResponse.decode(new Reader(data)));
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
