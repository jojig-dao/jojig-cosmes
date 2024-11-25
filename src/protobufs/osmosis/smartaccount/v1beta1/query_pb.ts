// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/smartaccount/v1beta1/query.proto (package osmosis.smartaccount.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { AccountAuthenticator } from "./models_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message osmosis.smartaccount.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.smartaccount.v1beta1.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message osmosis.smartaccount.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: osmosis.smartaccount.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.smartaccount.v1beta1.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type.
 *
 * @generated from message osmosis.smartaccount.v1beta1.GetAuthenticatorsRequest
 */
export class GetAuthenticatorsRequest extends Message<GetAuthenticatorsRequest> {
  /**
   * @generated from field: string account = 1;
   */
  account = "";

  constructor(data?: PartialMessage<GetAuthenticatorsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.smartaccount.v1beta1.GetAuthenticatorsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthenticatorsRequest {
    return new GetAuthenticatorsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthenticatorsRequest {
    return new GetAuthenticatorsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthenticatorsRequest {
    return new GetAuthenticatorsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetAuthenticatorsRequest | PlainMessage<GetAuthenticatorsRequest> | undefined, b: GetAuthenticatorsRequest | PlainMessage<GetAuthenticatorsRequest> | undefined): boolean {
    return proto3.util.equals(GetAuthenticatorsRequest, a, b);
  }
}

/**
 * MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type.
 *
 * @generated from message osmosis.smartaccount.v1beta1.GetAuthenticatorsResponse
 */
export class GetAuthenticatorsResponse extends Message<GetAuthenticatorsResponse> {
  /**
   * @generated from field: repeated osmosis.smartaccount.v1beta1.AccountAuthenticator account_authenticators = 1;
   */
  accountAuthenticators: AccountAuthenticator[] = [];

  constructor(data?: PartialMessage<GetAuthenticatorsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.smartaccount.v1beta1.GetAuthenticatorsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "account_authenticators", kind: "message", T: AccountAuthenticator, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthenticatorsResponse {
    return new GetAuthenticatorsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthenticatorsResponse {
    return new GetAuthenticatorsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthenticatorsResponse {
    return new GetAuthenticatorsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetAuthenticatorsResponse | PlainMessage<GetAuthenticatorsResponse> | undefined, b: GetAuthenticatorsResponse | PlainMessage<GetAuthenticatorsResponse> | undefined): boolean {
    return proto3.util.equals(GetAuthenticatorsResponse, a, b);
  }
}

/**
 * MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type.
 *
 * @generated from message osmosis.smartaccount.v1beta1.GetAuthenticatorRequest
 */
export class GetAuthenticatorRequest extends Message<GetAuthenticatorRequest> {
  /**
   * @generated from field: string account = 1;
   */
  account = "";

  /**
   * @generated from field: uint64 authenticator_id = 2;
   */
  authenticatorId = protoInt64.zero;

  constructor(data?: PartialMessage<GetAuthenticatorRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.smartaccount.v1beta1.GetAuthenticatorRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "authenticator_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthenticatorRequest {
    return new GetAuthenticatorRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthenticatorRequest {
    return new GetAuthenticatorRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthenticatorRequest {
    return new GetAuthenticatorRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetAuthenticatorRequest | PlainMessage<GetAuthenticatorRequest> | undefined, b: GetAuthenticatorRequest | PlainMessage<GetAuthenticatorRequest> | undefined): boolean {
    return proto3.util.equals(GetAuthenticatorRequest, a, b);
  }
}

/**
 * MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type.
 *
 * @generated from message osmosis.smartaccount.v1beta1.GetAuthenticatorResponse
 */
export class GetAuthenticatorResponse extends Message<GetAuthenticatorResponse> {
  /**
   * @generated from field: osmosis.smartaccount.v1beta1.AccountAuthenticator account_authenticator = 1;
   */
  accountAuthenticator?: AccountAuthenticator;

  constructor(data?: PartialMessage<GetAuthenticatorResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.smartaccount.v1beta1.GetAuthenticatorResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "account_authenticator", kind: "message", T: AccountAuthenticator },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthenticatorResponse {
    return new GetAuthenticatorResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthenticatorResponse {
    return new GetAuthenticatorResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthenticatorResponse {
    return new GetAuthenticatorResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetAuthenticatorResponse | PlainMessage<GetAuthenticatorResponse> | undefined, b: GetAuthenticatorResponse | PlainMessage<GetAuthenticatorResponse> | undefined): boolean {
    return proto3.util.equals(GetAuthenticatorResponse, a, b);
  }
}
