/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../citizen/params";
import { Owner } from "../citizen/owner";
import { Citizen } from "../citizen/citizen";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { CitizenOwner } from "../citizen/citizen_owner";

export const protobufPackage = "demoonechain.citizen";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetOwnerRequest {}

export interface QueryGetOwnerResponse {
  Owner: Owner | undefined;
}

export interface QueryModuleOwnerRequest {}

export interface QueryModuleOwnerResponse {
  owner: string;
}

export interface QueryGetCitizenRequest {
  citizenId: string;
}

export interface QueryGetCitizenResponse {
  citizen: Citizen | undefined;
}

export interface QueryAllCitizenRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCitizenResponse {
  citizen: Citizen[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCitizenOwnerRequest {
  citizenId: string;
}

export interface QueryGetCitizenOwnerResponse {
  citizenOwner: CitizenOwner | undefined;
}

export interface QueryAllCitizenOwnerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCitizenOwnerResponse {
  citizenOwner: CitizenOwner[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetOwnerRequest: object = {};

export const QueryGetOwnerRequest = {
  encode(_: QueryGetOwnerRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOwnerRequest } as QueryGetOwnerRequest;
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

  fromJSON(_: any): QueryGetOwnerRequest {
    const message = { ...baseQueryGetOwnerRequest } as QueryGetOwnerRequest;
    return message;
  },

  toJSON(_: QueryGetOwnerRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetOwnerRequest>): QueryGetOwnerRequest {
    const message = { ...baseQueryGetOwnerRequest } as QueryGetOwnerRequest;
    return message;
  },
};

const baseQueryGetOwnerResponse: object = {};

export const QueryGetOwnerResponse = {
  encode(
    message: QueryGetOwnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Owner !== undefined) {
      Owner.encode(message.Owner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOwnerResponse } as QueryGetOwnerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Owner = Owner.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOwnerResponse {
    const message = { ...baseQueryGetOwnerResponse } as QueryGetOwnerResponse;
    if (object.Owner !== undefined && object.Owner !== null) {
      message.Owner = Owner.fromJSON(object.Owner);
    } else {
      message.Owner = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOwnerResponse): unknown {
    const obj: any = {};
    message.Owner !== undefined &&
      (obj.Owner = message.Owner ? Owner.toJSON(message.Owner) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOwnerResponse>
  ): QueryGetOwnerResponse {
    const message = { ...baseQueryGetOwnerResponse } as QueryGetOwnerResponse;
    if (object.Owner !== undefined && object.Owner !== null) {
      message.Owner = Owner.fromPartial(object.Owner);
    } else {
      message.Owner = undefined;
    }
    return message;
  },
};

const baseQueryModuleOwnerRequest: object = {};

export const QueryModuleOwnerRequest = {
  encode(_: QueryModuleOwnerRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryModuleOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryModuleOwnerRequest,
    } as QueryModuleOwnerRequest;
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

  fromJSON(_: any): QueryModuleOwnerRequest {
    const message = {
      ...baseQueryModuleOwnerRequest,
    } as QueryModuleOwnerRequest;
    return message;
  },

  toJSON(_: QueryModuleOwnerRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryModuleOwnerRequest>
  ): QueryModuleOwnerRequest {
    const message = {
      ...baseQueryModuleOwnerRequest,
    } as QueryModuleOwnerRequest;
    return message;
  },
};

const baseQueryModuleOwnerResponse: object = { owner: "" };

export const QueryModuleOwnerResponse = {
  encode(
    message: QueryModuleOwnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryModuleOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryModuleOwnerResponse,
    } as QueryModuleOwnerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryModuleOwnerResponse {
    const message = {
      ...baseQueryModuleOwnerResponse,
    } as QueryModuleOwnerResponse;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: QueryModuleOwnerResponse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryModuleOwnerResponse>
  ): QueryModuleOwnerResponse {
    const message = {
      ...baseQueryModuleOwnerResponse,
    } as QueryModuleOwnerResponse;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseQueryGetCitizenRequest: object = { citizenId: "" };

export const QueryGetCitizenRequest = {
  encode(
    message: QueryGetCitizenRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.citizenId !== "") {
      writer.uint32(10).string(message.citizenId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCitizenRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCitizenRequest } as QueryGetCitizenRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.citizenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCitizenRequest {
    const message = { ...baseQueryGetCitizenRequest } as QueryGetCitizenRequest;
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = String(object.citizenId);
    } else {
      message.citizenId = "";
    }
    return message;
  },

  toJSON(message: QueryGetCitizenRequest): unknown {
    const obj: any = {};
    message.citizenId !== undefined && (obj.citizenId = message.citizenId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCitizenRequest>
  ): QueryGetCitizenRequest {
    const message = { ...baseQueryGetCitizenRequest } as QueryGetCitizenRequest;
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = object.citizenId;
    } else {
      message.citizenId = "";
    }
    return message;
  },
};

const baseQueryGetCitizenResponse: object = {};

export const QueryGetCitizenResponse = {
  encode(
    message: QueryGetCitizenResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.citizen !== undefined) {
      Citizen.encode(message.citizen, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCitizenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCitizenResponse,
    } as QueryGetCitizenResponse;
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

  fromJSON(object: any): QueryGetCitizenResponse {
    const message = {
      ...baseQueryGetCitizenResponse,
    } as QueryGetCitizenResponse;
    if (object.citizen !== undefined && object.citizen !== null) {
      message.citizen = Citizen.fromJSON(object.citizen);
    } else {
      message.citizen = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCitizenResponse): unknown {
    const obj: any = {};
    message.citizen !== undefined &&
      (obj.citizen = message.citizen
        ? Citizen.toJSON(message.citizen)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCitizenResponse>
  ): QueryGetCitizenResponse {
    const message = {
      ...baseQueryGetCitizenResponse,
    } as QueryGetCitizenResponse;
    if (object.citizen !== undefined && object.citizen !== null) {
      message.citizen = Citizen.fromPartial(object.citizen);
    } else {
      message.citizen = undefined;
    }
    return message;
  },
};

const baseQueryAllCitizenRequest: object = {};

export const QueryAllCitizenRequest = {
  encode(
    message: QueryAllCitizenRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCitizenRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCitizenRequest } as QueryAllCitizenRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCitizenRequest {
    const message = { ...baseQueryAllCitizenRequest } as QueryAllCitizenRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCitizenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCitizenRequest>
  ): QueryAllCitizenRequest {
    const message = { ...baseQueryAllCitizenRequest } as QueryAllCitizenRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCitizenResponse: object = {};

export const QueryAllCitizenResponse = {
  encode(
    message: QueryAllCitizenResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.citizen) {
      Citizen.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCitizenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCitizenResponse,
    } as QueryAllCitizenResponse;
    message.citizen = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.citizen.push(Citizen.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCitizenResponse {
    const message = {
      ...baseQueryAllCitizenResponse,
    } as QueryAllCitizenResponse;
    message.citizen = [];
    if (object.citizen !== undefined && object.citizen !== null) {
      for (const e of object.citizen) {
        message.citizen.push(Citizen.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCitizenResponse): unknown {
    const obj: any = {};
    if (message.citizen) {
      obj.citizen = message.citizen.map((e) =>
        e ? Citizen.toJSON(e) : undefined
      );
    } else {
      obj.citizen = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCitizenResponse>
  ): QueryAllCitizenResponse {
    const message = {
      ...baseQueryAllCitizenResponse,
    } as QueryAllCitizenResponse;
    message.citizen = [];
    if (object.citizen !== undefined && object.citizen !== null) {
      for (const e of object.citizen) {
        message.citizen.push(Citizen.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCitizenOwnerRequest: object = { citizenId: "" };

export const QueryGetCitizenOwnerRequest = {
  encode(
    message: QueryGetCitizenOwnerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.citizenId !== "") {
      writer.uint32(10).string(message.citizenId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCitizenOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCitizenOwnerRequest,
    } as QueryGetCitizenOwnerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.citizenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCitizenOwnerRequest {
    const message = {
      ...baseQueryGetCitizenOwnerRequest,
    } as QueryGetCitizenOwnerRequest;
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = String(object.citizenId);
    } else {
      message.citizenId = "";
    }
    return message;
  },

  toJSON(message: QueryGetCitizenOwnerRequest): unknown {
    const obj: any = {};
    message.citizenId !== undefined && (obj.citizenId = message.citizenId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCitizenOwnerRequest>
  ): QueryGetCitizenOwnerRequest {
    const message = {
      ...baseQueryGetCitizenOwnerRequest,
    } as QueryGetCitizenOwnerRequest;
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = object.citizenId;
    } else {
      message.citizenId = "";
    }
    return message;
  },
};

const baseQueryGetCitizenOwnerResponse: object = {};

export const QueryGetCitizenOwnerResponse = {
  encode(
    message: QueryGetCitizenOwnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.citizenOwner !== undefined) {
      CitizenOwner.encode(
        message.citizenOwner,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCitizenOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCitizenOwnerResponse,
    } as QueryGetCitizenOwnerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.citizenOwner = CitizenOwner.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCitizenOwnerResponse {
    const message = {
      ...baseQueryGetCitizenOwnerResponse,
    } as QueryGetCitizenOwnerResponse;
    if (object.citizenOwner !== undefined && object.citizenOwner !== null) {
      message.citizenOwner = CitizenOwner.fromJSON(object.citizenOwner);
    } else {
      message.citizenOwner = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCitizenOwnerResponse): unknown {
    const obj: any = {};
    message.citizenOwner !== undefined &&
      (obj.citizenOwner = message.citizenOwner
        ? CitizenOwner.toJSON(message.citizenOwner)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCitizenOwnerResponse>
  ): QueryGetCitizenOwnerResponse {
    const message = {
      ...baseQueryGetCitizenOwnerResponse,
    } as QueryGetCitizenOwnerResponse;
    if (object.citizenOwner !== undefined && object.citizenOwner !== null) {
      message.citizenOwner = CitizenOwner.fromPartial(object.citizenOwner);
    } else {
      message.citizenOwner = undefined;
    }
    return message;
  },
};

const baseQueryAllCitizenOwnerRequest: object = {};

export const QueryAllCitizenOwnerRequest = {
  encode(
    message: QueryAllCitizenOwnerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCitizenOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCitizenOwnerRequest,
    } as QueryAllCitizenOwnerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCitizenOwnerRequest {
    const message = {
      ...baseQueryAllCitizenOwnerRequest,
    } as QueryAllCitizenOwnerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCitizenOwnerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCitizenOwnerRequest>
  ): QueryAllCitizenOwnerRequest {
    const message = {
      ...baseQueryAllCitizenOwnerRequest,
    } as QueryAllCitizenOwnerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCitizenOwnerResponse: object = {};

export const QueryAllCitizenOwnerResponse = {
  encode(
    message: QueryAllCitizenOwnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.citizenOwner) {
      CitizenOwner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCitizenOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCitizenOwnerResponse,
    } as QueryAllCitizenOwnerResponse;
    message.citizenOwner = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.citizenOwner.push(
            CitizenOwner.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCitizenOwnerResponse {
    const message = {
      ...baseQueryAllCitizenOwnerResponse,
    } as QueryAllCitizenOwnerResponse;
    message.citizenOwner = [];
    if (object.citizenOwner !== undefined && object.citizenOwner !== null) {
      for (const e of object.citizenOwner) {
        message.citizenOwner.push(CitizenOwner.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCitizenOwnerResponse): unknown {
    const obj: any = {};
    if (message.citizenOwner) {
      obj.citizenOwner = message.citizenOwner.map((e) =>
        e ? CitizenOwner.toJSON(e) : undefined
      );
    } else {
      obj.citizenOwner = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCitizenOwnerResponse>
  ): QueryAllCitizenOwnerResponse {
    const message = {
      ...baseQueryAllCitizenOwnerResponse,
    } as QueryAllCitizenOwnerResponse;
    message.citizenOwner = [];
    if (object.citizenOwner !== undefined && object.citizenOwner !== null) {
      for (const e of object.citizenOwner) {
        message.citizenOwner.push(CitizenOwner.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Owner by index. */
  Owner(request: QueryGetOwnerRequest): Promise<QueryGetOwnerResponse>;
  /** Queries a list of ModuleOwner items. */
  ModuleOwner(
    request: QueryModuleOwnerRequest
  ): Promise<QueryModuleOwnerResponse>;
  /** Queries a Citizen by index. */
  Citizen(request: QueryGetCitizenRequest): Promise<QueryGetCitizenResponse>;
  /** Queries a list of Citizen items. */
  CitizenAll(request: QueryAllCitizenRequest): Promise<QueryAllCitizenResponse>;
  /** Queries a CitizenOwner by index. */
  CitizenOwner(
    request: QueryGetCitizenOwnerRequest
  ): Promise<QueryGetCitizenOwnerResponse>;
  /** Queries a list of CitizenOwner items. */
  CitizenOwnerAll(
    request: QueryAllCitizenOwnerRequest
  ): Promise<QueryAllCitizenOwnerResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Owner(request: QueryGetOwnerRequest): Promise<QueryGetOwnerResponse> {
    const data = QueryGetOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "Owner",
      data
    );
    return promise.then((data) =>
      QueryGetOwnerResponse.decode(new Reader(data))
    );
  }

  ModuleOwner(
    request: QueryModuleOwnerRequest
  ): Promise<QueryModuleOwnerResponse> {
    const data = QueryModuleOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "ModuleOwner",
      data
    );
    return promise.then((data) =>
      QueryModuleOwnerResponse.decode(new Reader(data))
    );
  }

  Citizen(request: QueryGetCitizenRequest): Promise<QueryGetCitizenResponse> {
    const data = QueryGetCitizenRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "Citizen",
      data
    );
    return promise.then((data) =>
      QueryGetCitizenResponse.decode(new Reader(data))
    );
  }

  CitizenAll(
    request: QueryAllCitizenRequest
  ): Promise<QueryAllCitizenResponse> {
    const data = QueryAllCitizenRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "CitizenAll",
      data
    );
    return promise.then((data) =>
      QueryAllCitizenResponse.decode(new Reader(data))
    );
  }

  CitizenOwner(
    request: QueryGetCitizenOwnerRequest
  ): Promise<QueryGetCitizenOwnerResponse> {
    const data = QueryGetCitizenOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "CitizenOwner",
      data
    );
    return promise.then((data) =>
      QueryGetCitizenOwnerResponse.decode(new Reader(data))
    );
  }

  CitizenOwnerAll(
    request: QueryAllCitizenOwnerRequest
  ): Promise<QueryAllCitizenOwnerResponse> {
    const data = QueryAllCitizenOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "CitizenOwnerAll",
      data
    );
    return promise.then((data) =>
      QueryAllCitizenOwnerResponse.decode(new Reader(data))
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
