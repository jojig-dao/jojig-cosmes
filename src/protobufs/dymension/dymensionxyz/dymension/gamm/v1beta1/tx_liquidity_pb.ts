// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file dymensionxyz/dymension/gamm/v1beta1/tx_liquidity.proto (package dymensionxyz.dymension.gamm.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgJoinPool
 */
export class MsgJoinPool extends Message<MsgJoinPool> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string share_out_amount = 3;
   */
  shareOutAmount = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin token_in_maxs = 4;
   */
  tokenInMaxs: Coin[] = [];

  constructor(data?: PartialMessage<MsgJoinPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgJoinPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "share_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "token_in_maxs", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinPool {
    return new MsgJoinPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinPool {
    return new MsgJoinPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinPool {
    return new MsgJoinPool().fromJsonString(jsonString, options);
  }

  static equals(a: MsgJoinPool | PlainMessage<MsgJoinPool> | undefined, b: MsgJoinPool | PlainMessage<MsgJoinPool> | undefined): boolean {
    return proto3.util.equals(MsgJoinPool, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgJoinPoolResponse
 */
export class MsgJoinPoolResponse extends Message<MsgJoinPoolResponse> {
  /**
   * @generated from field: string share_out_amount = 1;
   */
  shareOutAmount = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin token_in = 2;
   */
  tokenIn: Coin[] = [];

  constructor(data?: PartialMessage<MsgJoinPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgJoinPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "share_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token_in", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinPoolResponse {
    return new MsgJoinPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinPoolResponse {
    return new MsgJoinPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinPoolResponse {
    return new MsgJoinPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgJoinPoolResponse | PlainMessage<MsgJoinPoolResponse> | undefined, b: MsgJoinPoolResponse | PlainMessage<MsgJoinPoolResponse> | undefined): boolean {
    return proto3.util.equals(MsgJoinPoolResponse, a, b);
  }
}

/**
 * ===================== MsgExitPool
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgExitPool
 */
export class MsgExitPool extends Message<MsgExitPool> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string share_in_amount = 3;
   */
  shareInAmount = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin token_out_mins = 4;
   */
  tokenOutMins: Coin[] = [];

  constructor(data?: PartialMessage<MsgExitPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgExitPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "share_in_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "token_out_mins", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitPool {
    return new MsgExitPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitPool {
    return new MsgExitPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitPool {
    return new MsgExitPool().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExitPool | PlainMessage<MsgExitPool> | undefined, b: MsgExitPool | PlainMessage<MsgExitPool> | undefined): boolean {
    return proto3.util.equals(MsgExitPool, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgExitPoolResponse
 */
export class MsgExitPoolResponse extends Message<MsgExitPoolResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin token_out = 1;
   */
  tokenOut: Coin[] = [];

  constructor(data?: PartialMessage<MsgExitPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgExitPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_out", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitPoolResponse {
    return new MsgExitPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitPoolResponse {
    return new MsgExitPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitPoolResponse {
    return new MsgExitPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExitPoolResponse | PlainMessage<MsgExitPoolResponse> | undefined, b: MsgExitPoolResponse | PlainMessage<MsgExitPoolResponse> | undefined): boolean {
    return proto3.util.equals(MsgExitPoolResponse, a, b);
  }
}

/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapExternAmountIn
 */
export class MsgJoinSwapExternAmountIn extends Message<MsgJoinSwapExternAmountIn> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin token_in = 3;
   */
  tokenIn?: Coin;

  /**
   * repeated cosmos.base.v1beta1.Coin tokensIn = 5 [
   *   (gogoproto.moretags) = "yaml:\"tokens_in\"",
   *   (gogoproto.nullable) = false
   * ];
   *
   * @generated from field: string share_out_min_amount = 4;
   */
  shareOutMinAmount = "";

  constructor(data?: PartialMessage<MsgJoinSwapExternAmountIn>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapExternAmountIn";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "token_in", kind: "message", T: Coin },
    { no: 4, name: "share_out_min_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinSwapExternAmountIn {
    return new MsgJoinSwapExternAmountIn().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinSwapExternAmountIn {
    return new MsgJoinSwapExternAmountIn().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinSwapExternAmountIn {
    return new MsgJoinSwapExternAmountIn().fromJsonString(jsonString, options);
  }

  static equals(a: MsgJoinSwapExternAmountIn | PlainMessage<MsgJoinSwapExternAmountIn> | undefined, b: MsgJoinSwapExternAmountIn | PlainMessage<MsgJoinSwapExternAmountIn> | undefined): boolean {
    return proto3.util.equals(MsgJoinSwapExternAmountIn, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapExternAmountInResponse
 */
export class MsgJoinSwapExternAmountInResponse extends Message<MsgJoinSwapExternAmountInResponse> {
  /**
   * @generated from field: string share_out_amount = 1;
   */
  shareOutAmount = "";

  constructor(data?: PartialMessage<MsgJoinSwapExternAmountInResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapExternAmountInResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "share_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinSwapExternAmountInResponse {
    return new MsgJoinSwapExternAmountInResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinSwapExternAmountInResponse {
    return new MsgJoinSwapExternAmountInResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinSwapExternAmountInResponse {
    return new MsgJoinSwapExternAmountInResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgJoinSwapExternAmountInResponse | PlainMessage<MsgJoinSwapExternAmountInResponse> | undefined, b: MsgJoinSwapExternAmountInResponse | PlainMessage<MsgJoinSwapExternAmountInResponse> | undefined): boolean {
    return proto3.util.equals(MsgJoinSwapExternAmountInResponse, a, b);
  }
}

/**
 * ===================== MsgJoinSwapShareAmountOut
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapShareAmountOut
 */
export class MsgJoinSwapShareAmountOut extends Message<MsgJoinSwapShareAmountOut> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string token_in_denom = 3;
   */
  tokenInDenom = "";

  /**
   * @generated from field: string share_out_amount = 4;
   */
  shareOutAmount = "";

  /**
   * @generated from field: string token_in_max_amount = 5;
   */
  tokenInMaxAmount = "";

  constructor(data?: PartialMessage<MsgJoinSwapShareAmountOut>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapShareAmountOut";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "token_in_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "share_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "token_in_max_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinSwapShareAmountOut {
    return new MsgJoinSwapShareAmountOut().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinSwapShareAmountOut {
    return new MsgJoinSwapShareAmountOut().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinSwapShareAmountOut {
    return new MsgJoinSwapShareAmountOut().fromJsonString(jsonString, options);
  }

  static equals(a: MsgJoinSwapShareAmountOut | PlainMessage<MsgJoinSwapShareAmountOut> | undefined, b: MsgJoinSwapShareAmountOut | PlainMessage<MsgJoinSwapShareAmountOut> | undefined): boolean {
    return proto3.util.equals(MsgJoinSwapShareAmountOut, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse
 */
export class MsgJoinSwapShareAmountOutResponse extends Message<MsgJoinSwapShareAmountOutResponse> {
  /**
   * @generated from field: string token_in_amount = 1;
   */
  tokenInAmount = "";

  constructor(data?: PartialMessage<MsgJoinSwapShareAmountOutResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_in_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinSwapShareAmountOutResponse {
    return new MsgJoinSwapShareAmountOutResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinSwapShareAmountOutResponse {
    return new MsgJoinSwapShareAmountOutResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinSwapShareAmountOutResponse {
    return new MsgJoinSwapShareAmountOutResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgJoinSwapShareAmountOutResponse | PlainMessage<MsgJoinSwapShareAmountOutResponse> | undefined, b: MsgJoinSwapShareAmountOutResponse | PlainMessage<MsgJoinSwapShareAmountOutResponse> | undefined): boolean {
    return proto3.util.equals(MsgJoinSwapShareAmountOutResponse, a, b);
  }
}

/**
 * ===================== MsgExitSwapShareAmountIn
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapShareAmountIn
 */
export class MsgExitSwapShareAmountIn extends Message<MsgExitSwapShareAmountIn> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string token_out_denom = 3;
   */
  tokenOutDenom = "";

  /**
   * @generated from field: string share_in_amount = 4;
   */
  shareInAmount = "";

  /**
   * @generated from field: string token_out_min_amount = 5;
   */
  tokenOutMinAmount = "";

  constructor(data?: PartialMessage<MsgExitSwapShareAmountIn>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapShareAmountIn";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "token_out_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "share_in_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "token_out_min_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitSwapShareAmountIn {
    return new MsgExitSwapShareAmountIn().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitSwapShareAmountIn {
    return new MsgExitSwapShareAmountIn().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitSwapShareAmountIn {
    return new MsgExitSwapShareAmountIn().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExitSwapShareAmountIn | PlainMessage<MsgExitSwapShareAmountIn> | undefined, b: MsgExitSwapShareAmountIn | PlainMessage<MsgExitSwapShareAmountIn> | undefined): boolean {
    return proto3.util.equals(MsgExitSwapShareAmountIn, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapShareAmountInResponse
 */
export class MsgExitSwapShareAmountInResponse extends Message<MsgExitSwapShareAmountInResponse> {
  /**
   * @generated from field: string token_out_amount = 1;
   */
  tokenOutAmount = "";

  constructor(data?: PartialMessage<MsgExitSwapShareAmountInResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapShareAmountInResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitSwapShareAmountInResponse {
    return new MsgExitSwapShareAmountInResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitSwapShareAmountInResponse {
    return new MsgExitSwapShareAmountInResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitSwapShareAmountInResponse {
    return new MsgExitSwapShareAmountInResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExitSwapShareAmountInResponse | PlainMessage<MsgExitSwapShareAmountInResponse> | undefined, b: MsgExitSwapShareAmountInResponse | PlainMessage<MsgExitSwapShareAmountInResponse> | undefined): boolean {
    return proto3.util.equals(MsgExitSwapShareAmountInResponse, a, b);
  }
}

/**
 * ===================== MsgExitSwapExternAmountOut
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapExternAmountOut
 */
export class MsgExitSwapExternAmountOut extends Message<MsgExitSwapExternAmountOut> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin token_out = 3;
   */
  tokenOut?: Coin;

  /**
   * @generated from field: string share_in_max_amount = 4;
   */
  shareInMaxAmount = "";

  constructor(data?: PartialMessage<MsgExitSwapExternAmountOut>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapExternAmountOut";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "token_out", kind: "message", T: Coin },
    { no: 4, name: "share_in_max_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitSwapExternAmountOut {
    return new MsgExitSwapExternAmountOut().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitSwapExternAmountOut {
    return new MsgExitSwapExternAmountOut().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitSwapExternAmountOut {
    return new MsgExitSwapExternAmountOut().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExitSwapExternAmountOut | PlainMessage<MsgExitSwapExternAmountOut> | undefined, b: MsgExitSwapExternAmountOut | PlainMessage<MsgExitSwapExternAmountOut> | undefined): boolean {
    return proto3.util.equals(MsgExitSwapExternAmountOut, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapExternAmountOutResponse
 */
export class MsgExitSwapExternAmountOutResponse extends Message<MsgExitSwapExternAmountOutResponse> {
  /**
   * @generated from field: string share_in_amount = 1;
   */
  shareInAmount = "";

  constructor(data?: PartialMessage<MsgExitSwapExternAmountOutResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapExternAmountOutResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "share_in_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitSwapExternAmountOutResponse {
    return new MsgExitSwapExternAmountOutResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitSwapExternAmountOutResponse {
    return new MsgExitSwapExternAmountOutResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitSwapExternAmountOutResponse {
    return new MsgExitSwapExternAmountOutResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExitSwapExternAmountOutResponse | PlainMessage<MsgExitSwapExternAmountOutResponse> | undefined, b: MsgExitSwapExternAmountOutResponse | PlainMessage<MsgExitSwapExternAmountOutResponse> | undefined): boolean {
    return proto3.util.equals(MsgExitSwapExternAmountOutResponse, a, b);
  }
}

