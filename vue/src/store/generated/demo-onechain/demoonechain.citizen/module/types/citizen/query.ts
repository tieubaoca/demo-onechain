/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../citizen/params";
import { Owner } from "../citizen/owner";
import { Citizen } from "../citizen/citizen";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { CitizenOwner } from "../citizen/citizen_owner";
import { CitizenIds } from "../citizen/citizen_ids";
import { CitizensOwned } from "../citizen/citizens_owned";
import { Approval } from "../citizen/approval";
import { ApprovalForAll } from "../citizen/approval_for_all";

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

export interface QueryGetCitizenIdsRequest {
  id: number;
}

export interface QueryGetCitizenIdsResponse {
  CitizenIds: CitizenIds | undefined;
}

export interface QueryAllCitizenIdsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCitizenIdsResponse {
  CitizenIds: CitizenIds[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCitizensOwnedRequest {
  owner: string;
}

export interface QueryGetCitizensOwnedResponse {
  citizensOwned: CitizensOwned | undefined;
}

export interface QueryAllCitizensOwnedRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCitizensOwnedResponse {
  citizensOwned: CitizensOwned[];
  pagination: PageResponse | undefined;
}

export interface QueryGetApprovalRequest {
  citizenId: string;
}

export interface QueryGetApprovalResponse {
  approval: Approval | undefined;
}

export interface QueryAllApprovalRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllApprovalResponse {
  approval: Approval[];
  pagination: PageResponse | undefined;
}

export interface QueryGetApprovalForAllRequest {
  owner: string;
}

export interface QueryGetApprovalForAllResponse {
  approvalForAll: ApprovalForAll | undefined;
}

export interface QueryAllApprovalForAllRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllApprovalForAllResponse {
  approvalForAll: ApprovalForAll[];
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

const baseQueryGetCitizenIdsRequest: object = { id: 0 };

export const QueryGetCitizenIdsRequest = {
  encode(
    message: QueryGetCitizenIdsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCitizenIdsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCitizenIdsRequest,
    } as QueryGetCitizenIdsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCitizenIdsRequest {
    const message = {
      ...baseQueryGetCitizenIdsRequest,
    } as QueryGetCitizenIdsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCitizenIdsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCitizenIdsRequest>
  ): QueryGetCitizenIdsRequest {
    const message = {
      ...baseQueryGetCitizenIdsRequest,
    } as QueryGetCitizenIdsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCitizenIdsResponse: object = {};

export const QueryGetCitizenIdsResponse = {
  encode(
    message: QueryGetCitizenIdsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.CitizenIds !== undefined) {
      CitizenIds.encode(message.CitizenIds, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCitizenIdsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCitizenIdsResponse,
    } as QueryGetCitizenIdsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CitizenIds = CitizenIds.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCitizenIdsResponse {
    const message = {
      ...baseQueryGetCitizenIdsResponse,
    } as QueryGetCitizenIdsResponse;
    if (object.CitizenIds !== undefined && object.CitizenIds !== null) {
      message.CitizenIds = CitizenIds.fromJSON(object.CitizenIds);
    } else {
      message.CitizenIds = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCitizenIdsResponse): unknown {
    const obj: any = {};
    message.CitizenIds !== undefined &&
      (obj.CitizenIds = message.CitizenIds
        ? CitizenIds.toJSON(message.CitizenIds)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCitizenIdsResponse>
  ): QueryGetCitizenIdsResponse {
    const message = {
      ...baseQueryGetCitizenIdsResponse,
    } as QueryGetCitizenIdsResponse;
    if (object.CitizenIds !== undefined && object.CitizenIds !== null) {
      message.CitizenIds = CitizenIds.fromPartial(object.CitizenIds);
    } else {
      message.CitizenIds = undefined;
    }
    return message;
  },
};

const baseQueryAllCitizenIdsRequest: object = {};

export const QueryAllCitizenIdsRequest = {
  encode(
    message: QueryAllCitizenIdsRequest,
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
  ): QueryAllCitizenIdsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCitizenIdsRequest,
    } as QueryAllCitizenIdsRequest;
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

  fromJSON(object: any): QueryAllCitizenIdsRequest {
    const message = {
      ...baseQueryAllCitizenIdsRequest,
    } as QueryAllCitizenIdsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCitizenIdsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCitizenIdsRequest>
  ): QueryAllCitizenIdsRequest {
    const message = {
      ...baseQueryAllCitizenIdsRequest,
    } as QueryAllCitizenIdsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCitizenIdsResponse: object = {};

export const QueryAllCitizenIdsResponse = {
  encode(
    message: QueryAllCitizenIdsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.CitizenIds) {
      CitizenIds.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllCitizenIdsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCitizenIdsResponse,
    } as QueryAllCitizenIdsResponse;
    message.CitizenIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CitizenIds.push(CitizenIds.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllCitizenIdsResponse {
    const message = {
      ...baseQueryAllCitizenIdsResponse,
    } as QueryAllCitizenIdsResponse;
    message.CitizenIds = [];
    if (object.CitizenIds !== undefined && object.CitizenIds !== null) {
      for (const e of object.CitizenIds) {
        message.CitizenIds.push(CitizenIds.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCitizenIdsResponse): unknown {
    const obj: any = {};
    if (message.CitizenIds) {
      obj.CitizenIds = message.CitizenIds.map((e) =>
        e ? CitizenIds.toJSON(e) : undefined
      );
    } else {
      obj.CitizenIds = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCitizenIdsResponse>
  ): QueryAllCitizenIdsResponse {
    const message = {
      ...baseQueryAllCitizenIdsResponse,
    } as QueryAllCitizenIdsResponse;
    message.CitizenIds = [];
    if (object.CitizenIds !== undefined && object.CitizenIds !== null) {
      for (const e of object.CitizenIds) {
        message.CitizenIds.push(CitizenIds.fromPartial(e));
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

const baseQueryGetCitizensOwnedRequest: object = { owner: "" };

export const QueryGetCitizensOwnedRequest = {
  encode(
    message: QueryGetCitizensOwnedRequest,
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
  ): QueryGetCitizensOwnedRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCitizensOwnedRequest,
    } as QueryGetCitizensOwnedRequest;
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

  fromJSON(object: any): QueryGetCitizensOwnedRequest {
    const message = {
      ...baseQueryGetCitizensOwnedRequest,
    } as QueryGetCitizensOwnedRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: QueryGetCitizensOwnedRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCitizensOwnedRequest>
  ): QueryGetCitizensOwnedRequest {
    const message = {
      ...baseQueryGetCitizensOwnedRequest,
    } as QueryGetCitizensOwnedRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseQueryGetCitizensOwnedResponse: object = {};

export const QueryGetCitizensOwnedResponse = {
  encode(
    message: QueryGetCitizensOwnedResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.citizensOwned !== undefined) {
      CitizensOwned.encode(
        message.citizensOwned,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCitizensOwnedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCitizensOwnedResponse,
    } as QueryGetCitizensOwnedResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.citizensOwned = CitizensOwned.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCitizensOwnedResponse {
    const message = {
      ...baseQueryGetCitizensOwnedResponse,
    } as QueryGetCitizensOwnedResponse;
    if (object.citizensOwned !== undefined && object.citizensOwned !== null) {
      message.citizensOwned = CitizensOwned.fromJSON(object.citizensOwned);
    } else {
      message.citizensOwned = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCitizensOwnedResponse): unknown {
    const obj: any = {};
    message.citizensOwned !== undefined &&
      (obj.citizensOwned = message.citizensOwned
        ? CitizensOwned.toJSON(message.citizensOwned)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCitizensOwnedResponse>
  ): QueryGetCitizensOwnedResponse {
    const message = {
      ...baseQueryGetCitizensOwnedResponse,
    } as QueryGetCitizensOwnedResponse;
    if (object.citizensOwned !== undefined && object.citizensOwned !== null) {
      message.citizensOwned = CitizensOwned.fromPartial(object.citizensOwned);
    } else {
      message.citizensOwned = undefined;
    }
    return message;
  },
};

const baseQueryAllCitizensOwnedRequest: object = {};

export const QueryAllCitizensOwnedRequest = {
  encode(
    message: QueryAllCitizensOwnedRequest,
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
  ): QueryAllCitizensOwnedRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCitizensOwnedRequest,
    } as QueryAllCitizensOwnedRequest;
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

  fromJSON(object: any): QueryAllCitizensOwnedRequest {
    const message = {
      ...baseQueryAllCitizensOwnedRequest,
    } as QueryAllCitizensOwnedRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCitizensOwnedRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCitizensOwnedRequest>
  ): QueryAllCitizensOwnedRequest {
    const message = {
      ...baseQueryAllCitizensOwnedRequest,
    } as QueryAllCitizensOwnedRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCitizensOwnedResponse: object = {};

export const QueryAllCitizensOwnedResponse = {
  encode(
    message: QueryAllCitizensOwnedResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.citizensOwned) {
      CitizensOwned.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllCitizensOwnedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCitizensOwnedResponse,
    } as QueryAllCitizensOwnedResponse;
    message.citizensOwned = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.citizensOwned.push(
            CitizensOwned.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllCitizensOwnedResponse {
    const message = {
      ...baseQueryAllCitizensOwnedResponse,
    } as QueryAllCitizensOwnedResponse;
    message.citizensOwned = [];
    if (object.citizensOwned !== undefined && object.citizensOwned !== null) {
      for (const e of object.citizensOwned) {
        message.citizensOwned.push(CitizensOwned.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCitizensOwnedResponse): unknown {
    const obj: any = {};
    if (message.citizensOwned) {
      obj.citizensOwned = message.citizensOwned.map((e) =>
        e ? CitizensOwned.toJSON(e) : undefined
      );
    } else {
      obj.citizensOwned = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCitizensOwnedResponse>
  ): QueryAllCitizensOwnedResponse {
    const message = {
      ...baseQueryAllCitizensOwnedResponse,
    } as QueryAllCitizensOwnedResponse;
    message.citizensOwned = [];
    if (object.citizensOwned !== undefined && object.citizensOwned !== null) {
      for (const e of object.citizensOwned) {
        message.citizensOwned.push(CitizensOwned.fromPartial(e));
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

const baseQueryGetApprovalRequest: object = { citizenId: "" };

export const QueryGetApprovalRequest = {
  encode(
    message: QueryGetApprovalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.citizenId !== "") {
      writer.uint32(10).string(message.citizenId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetApprovalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetApprovalRequest,
    } as QueryGetApprovalRequest;
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

  fromJSON(object: any): QueryGetApprovalRequest {
    const message = {
      ...baseQueryGetApprovalRequest,
    } as QueryGetApprovalRequest;
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = String(object.citizenId);
    } else {
      message.citizenId = "";
    }
    return message;
  },

  toJSON(message: QueryGetApprovalRequest): unknown {
    const obj: any = {};
    message.citizenId !== undefined && (obj.citizenId = message.citizenId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetApprovalRequest>
  ): QueryGetApprovalRequest {
    const message = {
      ...baseQueryGetApprovalRequest,
    } as QueryGetApprovalRequest;
    if (object.citizenId !== undefined && object.citizenId !== null) {
      message.citizenId = object.citizenId;
    } else {
      message.citizenId = "";
    }
    return message;
  },
};

const baseQueryGetApprovalResponse: object = {};

export const QueryGetApprovalResponse = {
  encode(
    message: QueryGetApprovalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.approval !== undefined) {
      Approval.encode(message.approval, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetApprovalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetApprovalResponse,
    } as QueryGetApprovalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approval = Approval.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetApprovalResponse {
    const message = {
      ...baseQueryGetApprovalResponse,
    } as QueryGetApprovalResponse;
    if (object.approval !== undefined && object.approval !== null) {
      message.approval = Approval.fromJSON(object.approval);
    } else {
      message.approval = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetApprovalResponse): unknown {
    const obj: any = {};
    message.approval !== undefined &&
      (obj.approval = message.approval
        ? Approval.toJSON(message.approval)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetApprovalResponse>
  ): QueryGetApprovalResponse {
    const message = {
      ...baseQueryGetApprovalResponse,
    } as QueryGetApprovalResponse;
    if (object.approval !== undefined && object.approval !== null) {
      message.approval = Approval.fromPartial(object.approval);
    } else {
      message.approval = undefined;
    }
    return message;
  },
};

const baseQueryAllApprovalRequest: object = {};

export const QueryAllApprovalRequest = {
  encode(
    message: QueryAllApprovalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllApprovalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllApprovalRequest,
    } as QueryAllApprovalRequest;
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

  fromJSON(object: any): QueryAllApprovalRequest {
    const message = {
      ...baseQueryAllApprovalRequest,
    } as QueryAllApprovalRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllApprovalRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllApprovalRequest>
  ): QueryAllApprovalRequest {
    const message = {
      ...baseQueryAllApprovalRequest,
    } as QueryAllApprovalRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllApprovalResponse: object = {};

export const QueryAllApprovalResponse = {
  encode(
    message: QueryAllApprovalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.approval) {
      Approval.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllApprovalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllApprovalResponse,
    } as QueryAllApprovalResponse;
    message.approval = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approval.push(Approval.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllApprovalResponse {
    const message = {
      ...baseQueryAllApprovalResponse,
    } as QueryAllApprovalResponse;
    message.approval = [];
    if (object.approval !== undefined && object.approval !== null) {
      for (const e of object.approval) {
        message.approval.push(Approval.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllApprovalResponse): unknown {
    const obj: any = {};
    if (message.approval) {
      obj.approval = message.approval.map((e) =>
        e ? Approval.toJSON(e) : undefined
      );
    } else {
      obj.approval = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllApprovalResponse>
  ): QueryAllApprovalResponse {
    const message = {
      ...baseQueryAllApprovalResponse,
    } as QueryAllApprovalResponse;
    message.approval = [];
    if (object.approval !== undefined && object.approval !== null) {
      for (const e of object.approval) {
        message.approval.push(Approval.fromPartial(e));
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

const baseQueryGetApprovalForAllRequest: object = { owner: "" };

export const QueryGetApprovalForAllRequest = {
  encode(
    message: QueryGetApprovalForAllRequest,
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
  ): QueryGetApprovalForAllRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetApprovalForAllRequest,
    } as QueryGetApprovalForAllRequest;
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

  fromJSON(object: any): QueryGetApprovalForAllRequest {
    const message = {
      ...baseQueryGetApprovalForAllRequest,
    } as QueryGetApprovalForAllRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: QueryGetApprovalForAllRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetApprovalForAllRequest>
  ): QueryGetApprovalForAllRequest {
    const message = {
      ...baseQueryGetApprovalForAllRequest,
    } as QueryGetApprovalForAllRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseQueryGetApprovalForAllResponse: object = {};

export const QueryGetApprovalForAllResponse = {
  encode(
    message: QueryGetApprovalForAllResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.approvalForAll !== undefined) {
      ApprovalForAll.encode(
        message.approvalForAll,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetApprovalForAllResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetApprovalForAllResponse,
    } as QueryGetApprovalForAllResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approvalForAll = ApprovalForAll.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetApprovalForAllResponse {
    const message = {
      ...baseQueryGetApprovalForAllResponse,
    } as QueryGetApprovalForAllResponse;
    if (object.approvalForAll !== undefined && object.approvalForAll !== null) {
      message.approvalForAll = ApprovalForAll.fromJSON(object.approvalForAll);
    } else {
      message.approvalForAll = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetApprovalForAllResponse): unknown {
    const obj: any = {};
    message.approvalForAll !== undefined &&
      (obj.approvalForAll = message.approvalForAll
        ? ApprovalForAll.toJSON(message.approvalForAll)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetApprovalForAllResponse>
  ): QueryGetApprovalForAllResponse {
    const message = {
      ...baseQueryGetApprovalForAllResponse,
    } as QueryGetApprovalForAllResponse;
    if (object.approvalForAll !== undefined && object.approvalForAll !== null) {
      message.approvalForAll = ApprovalForAll.fromPartial(
        object.approvalForAll
      );
    } else {
      message.approvalForAll = undefined;
    }
    return message;
  },
};

const baseQueryAllApprovalForAllRequest: object = {};

export const QueryAllApprovalForAllRequest = {
  encode(
    message: QueryAllApprovalForAllRequest,
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
  ): QueryAllApprovalForAllRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllApprovalForAllRequest,
    } as QueryAllApprovalForAllRequest;
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

  fromJSON(object: any): QueryAllApprovalForAllRequest {
    const message = {
      ...baseQueryAllApprovalForAllRequest,
    } as QueryAllApprovalForAllRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllApprovalForAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllApprovalForAllRequest>
  ): QueryAllApprovalForAllRequest {
    const message = {
      ...baseQueryAllApprovalForAllRequest,
    } as QueryAllApprovalForAllRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllApprovalForAllResponse: object = {};

export const QueryAllApprovalForAllResponse = {
  encode(
    message: QueryAllApprovalForAllResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.approvalForAll) {
      ApprovalForAll.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllApprovalForAllResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllApprovalForAllResponse,
    } as QueryAllApprovalForAllResponse;
    message.approvalForAll = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approvalForAll.push(
            ApprovalForAll.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllApprovalForAllResponse {
    const message = {
      ...baseQueryAllApprovalForAllResponse,
    } as QueryAllApprovalForAllResponse;
    message.approvalForAll = [];
    if (object.approvalForAll !== undefined && object.approvalForAll !== null) {
      for (const e of object.approvalForAll) {
        message.approvalForAll.push(ApprovalForAll.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllApprovalForAllResponse): unknown {
    const obj: any = {};
    if (message.approvalForAll) {
      obj.approvalForAll = message.approvalForAll.map((e) =>
        e ? ApprovalForAll.toJSON(e) : undefined
      );
    } else {
      obj.approvalForAll = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllApprovalForAllResponse>
  ): QueryAllApprovalForAllResponse {
    const message = {
      ...baseQueryAllApprovalForAllResponse,
    } as QueryAllApprovalForAllResponse;
    message.approvalForAll = [];
    if (object.approvalForAll !== undefined && object.approvalForAll !== null) {
      for (const e of object.approvalForAll) {
        message.approvalForAll.push(ApprovalForAll.fromPartial(e));
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
  /** Queries a CitizenIds by id. */
  CitizenIds(
    request: QueryGetCitizenIdsRequest
  ): Promise<QueryGetCitizenIdsResponse>;
  /** Queries a list of CitizenIds items. */
  CitizenIdsAll(
    request: QueryAllCitizenIdsRequest
  ): Promise<QueryAllCitizenIdsResponse>;
  /** Queries a CitizensOwned by index. */
  CitizensOwned(
    request: QueryGetCitizensOwnedRequest
  ): Promise<QueryGetCitizensOwnedResponse>;
  /** Queries a list of CitizensOwned items. */
  CitizensOwnedAll(
    request: QueryAllCitizensOwnedRequest
  ): Promise<QueryAllCitizensOwnedResponse>;
  /** Queries a Approval by index. */
  Approval(request: QueryGetApprovalRequest): Promise<QueryGetApprovalResponse>;
  /** Queries a list of Approval items. */
  ApprovalAll(
    request: QueryAllApprovalRequest
  ): Promise<QueryAllApprovalResponse>;
  /** Queries a ApprovalForAll by index. */
  ApprovalForAll(
    request: QueryGetApprovalForAllRequest
  ): Promise<QueryGetApprovalForAllResponse>;
  /** Queries a list of ApprovalForAll items. */
  ApprovalForAllAll(
    request: QueryAllApprovalForAllRequest
  ): Promise<QueryAllApprovalForAllResponse>;
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

  CitizenIds(
    request: QueryGetCitizenIdsRequest
  ): Promise<QueryGetCitizenIdsResponse> {
    const data = QueryGetCitizenIdsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "CitizenIds",
      data
    );
    return promise.then((data) =>
      QueryGetCitizenIdsResponse.decode(new Reader(data))
    );
  }

  CitizenIdsAll(
    request: QueryAllCitizenIdsRequest
  ): Promise<QueryAllCitizenIdsResponse> {
    const data = QueryAllCitizenIdsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "CitizenIdsAll",
      data
    );
    return promise.then((data) =>
      QueryAllCitizenIdsResponse.decode(new Reader(data))
    );
  }

  CitizensOwned(
    request: QueryGetCitizensOwnedRequest
  ): Promise<QueryGetCitizensOwnedResponse> {
    const data = QueryGetCitizensOwnedRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "CitizensOwned",
      data
    );
    return promise.then((data) =>
      QueryGetCitizensOwnedResponse.decode(new Reader(data))
    );
  }

  CitizensOwnedAll(
    request: QueryAllCitizensOwnedRequest
  ): Promise<QueryAllCitizensOwnedResponse> {
    const data = QueryAllCitizensOwnedRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "CitizensOwnedAll",
      data
    );
    return promise.then((data) =>
      QueryAllCitizensOwnedResponse.decode(new Reader(data))
    );
  }

  Approval(
    request: QueryGetApprovalRequest
  ): Promise<QueryGetApprovalResponse> {
    const data = QueryGetApprovalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "Approval",
      data
    );
    return promise.then((data) =>
      QueryGetApprovalResponse.decode(new Reader(data))
    );
  }

  ApprovalAll(
    request: QueryAllApprovalRequest
  ): Promise<QueryAllApprovalResponse> {
    const data = QueryAllApprovalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "ApprovalAll",
      data
    );
    return promise.then((data) =>
      QueryAllApprovalResponse.decode(new Reader(data))
    );
  }

  ApprovalForAll(
    request: QueryGetApprovalForAllRequest
  ): Promise<QueryGetApprovalForAllResponse> {
    const data = QueryGetApprovalForAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "ApprovalForAll",
      data
    );
    return promise.then((data) =>
      QueryGetApprovalForAllResponse.decode(new Reader(data))
    );
  }

  ApprovalForAllAll(
    request: QueryAllApprovalForAllRequest
  ): Promise<QueryAllApprovalForAllResponse> {
    const data = QueryAllApprovalForAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "demoonechain.citizen.Query",
      "ApprovalForAllAll",
      data
    );
    return promise.then((data) =>
      QueryAllApprovalForAllResponse.decode(new Reader(data))
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
