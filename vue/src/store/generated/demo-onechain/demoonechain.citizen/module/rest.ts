/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CitizenApproval {
  citizenId?: string;
  operator?: string;
}

export interface CitizenApprovalForAll {
  owner?: string;
  operators?: string[];
}

export interface CitizenCitizen {
  citizenId?: string;
  metadata?: CitizenMetadata;
  assets?: V1Beta1Coin[];
}

export interface CitizenCitizenIds {
  /** @format uint64 */
  id?: string;
  citizenIds?: string;
}

export interface CitizenCitizenOwner {
  citizenId?: string;
  owner?: string;
}

export interface CitizenCitizensOwned {
  owner?: string;
  citizenIds?: string[];
}

export interface CitizenMetadata {
  title?: string;
  description?: string;
  uri?: string;
  author?: string;

  /** @format int64 */
  createTime?: string;
}

export type CitizenMsgApproveResponse = object;

export interface CitizenMsgMintCitizenResponse {
  citizen?: CitizenCitizen;
}

export type CitizenMsgTransferOwnershipResponse = object;

export interface CitizenOwner {
  owner?: string;
}

/**
 * Params defines the parameters for the module.
 */
export type CitizenParams = object;

export interface CitizenQueryAllApprovalForAllResponse {
  approvalForAll?: CitizenApprovalForAll[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CitizenQueryAllApprovalResponse {
  approval?: CitizenApproval[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CitizenQueryAllCitizenIdsResponse {
  CitizenIds?: CitizenCitizenIds[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CitizenQueryAllCitizenOwnerResponse {
  citizenOwner?: CitizenCitizenOwner[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CitizenQueryAllCitizenResponse {
  citizen?: CitizenCitizen[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CitizenQueryAllCitizensOwnedResponse {
  citizensOwned?: CitizenCitizensOwned[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CitizenQueryGetApprovalForAllResponse {
  approvalForAll?: CitizenApprovalForAll;
}

export interface CitizenQueryGetApprovalResponse {
  approval?: CitizenApproval;
}

export interface CitizenQueryGetCitizenIdsResponse {
  CitizenIds?: CitizenCitizenIds;
}

export interface CitizenQueryGetCitizenOwnerResponse {
  citizenOwner?: CitizenCitizenOwner;
}

export interface CitizenQueryGetCitizenResponse {
  citizen?: CitizenCitizen;
}

export interface CitizenQueryGetCitizensOwnedResponse {
  citizensOwned?: CitizenCitizensOwned;
}

export interface CitizenQueryGetOwnerResponse {
  Owner?: CitizenOwner;
}

export interface CitizenQueryModuleOwnerResponse {
  owner?: string;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface CitizenQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: CitizenParams;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title citizen/approval.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryApprovalAll
   * @summary Queries a list of Approval items.
   * @request GET:/demo-onechain/citizen/approval
   */
  queryApprovalAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CitizenQueryAllApprovalResponse, RpcStatus>({
      path: `/demo-onechain/citizen/approval`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryApproval
   * @summary Queries a Approval by index.
   * @request GET:/demo-onechain/citizen/approval/{citizenId}
   */
  queryApproval = (citizenId: string, params: RequestParams = {}) =>
    this.request<CitizenQueryGetApprovalResponse, RpcStatus>({
      path: `/demo-onechain/citizen/approval/${citizenId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryApprovalForAllAll
   * @summary Queries a list of ApprovalForAll items.
   * @request GET:/demo-onechain/citizen/approval_for_all
   */
  queryApprovalForAllAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CitizenQueryAllApprovalForAllResponse, RpcStatus>({
      path: `/demo-onechain/citizen/approval_for_all`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryApprovalForAll
   * @summary Queries a ApprovalForAll by index.
   * @request GET:/demo-onechain/citizen/approval_for_all/{owner}
   */
  queryApprovalForAll = (owner: string, params: RequestParams = {}) =>
    this.request<CitizenQueryGetApprovalForAllResponse, RpcStatus>({
      path: `/demo-onechain/citizen/approval_for_all/${owner}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCitizenAll
   * @summary Queries a list of Citizen items.
   * @request GET:/demo-onechain/citizen/citizen
   */
  queryCitizenAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CitizenQueryAllCitizenResponse, RpcStatus>({
      path: `/demo-onechain/citizen/citizen`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCitizen
   * @summary Queries a Citizen by index.
   * @request GET:/demo-onechain/citizen/citizen/{citizenId}
   */
  queryCitizen = (citizenId: string, params: RequestParams = {}) =>
    this.request<CitizenQueryGetCitizenResponse, RpcStatus>({
      path: `/demo-onechain/citizen/citizen/${citizenId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCitizenIdsAll
   * @summary Queries a list of CitizenIds items.
   * @request GET:/demo-onechain/citizen/citizen_ids
   */
  queryCitizenIdsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CitizenQueryAllCitizenIdsResponse, RpcStatus>({
      path: `/demo-onechain/citizen/citizen_ids`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCitizenIds
   * @summary Queries a CitizenIds by id.
   * @request GET:/demo-onechain/citizen/citizen_ids/{id}
   */
  queryCitizenIds = (id: string, params: RequestParams = {}) =>
    this.request<CitizenQueryGetCitizenIdsResponse, RpcStatus>({
      path: `/demo-onechain/citizen/citizen_ids/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCitizenOwnerAll
   * @summary Queries a list of CitizenOwner items.
   * @request GET:/demo-onechain/citizen/citizen_owner
   */
  queryCitizenOwnerAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CitizenQueryAllCitizenOwnerResponse, RpcStatus>({
      path: `/demo-onechain/citizen/citizen_owner`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCitizenOwner
   * @summary Queries a CitizenOwner by index.
   * @request GET:/demo-onechain/citizen/citizen_owner/{citizenId}
   */
  queryCitizenOwner = (citizenId: string, params: RequestParams = {}) =>
    this.request<CitizenQueryGetCitizenOwnerResponse, RpcStatus>({
      path: `/demo-onechain/citizen/citizen_owner/${citizenId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCitizensOwnedAll
   * @summary Queries a list of CitizensOwned items.
   * @request GET:/demo-onechain/citizen/citizens_owned
   */
  queryCitizensOwnedAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CitizenQueryAllCitizensOwnedResponse, RpcStatus>({
      path: `/demo-onechain/citizen/citizens_owned`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCitizensOwned
   * @summary Queries a CitizensOwned by index.
   * @request GET:/demo-onechain/citizen/citizens_owned/{owner}
   */
  queryCitizensOwned = (owner: string, params: RequestParams = {}) =>
    this.request<CitizenQueryGetCitizensOwnedResponse, RpcStatus>({
      path: `/demo-onechain/citizen/citizens_owned/${owner}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryModuleOwner
   * @summary Queries a list of ModuleOwner items.
   * @request GET:/demo-onechain/citizen/module_owner
   */
  queryModuleOwner = (params: RequestParams = {}) =>
    this.request<CitizenQueryModuleOwnerResponse, RpcStatus>({
      path: `/demo-onechain/citizen/module_owner`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOwner
   * @summary Queries a Owner by index.
   * @request GET:/demo-onechain/citizen/owner
   */
  queryOwner = (params: RequestParams = {}) =>
    this.request<CitizenQueryGetOwnerResponse, RpcStatus>({
      path: `/demo-onechain/citizen/owner`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/demo-onechain/citizen/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<CitizenQueryParamsResponse, RpcStatus>({
      path: `/demo-onechain/citizen/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}
