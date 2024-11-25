// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/txfees/v1beta1/tx.proto (package osmosis.txfees.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FeeToken } from "./feetoken_pb.js";

/**
 * ===================== MsgSetFeeTokens
 *
 * @generated from message osmosis.txfees.v1beta1.MsgSetFeeTokens
 */
export class MsgSetFeeTokens extends Message<MsgSetFeeTokens> {
  /**
   * @generated from field: repeated osmosis.txfees.v1beta1.FeeToken fee_tokens = 1;
   */
  feeTokens: FeeToken[] = [];

  /**
   * @generated from field: string sender = 2;
   */
  sender = "";

  constructor(data?: PartialMessage<MsgSetFeeTokens>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.txfees.v1beta1.MsgSetFeeTokens";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fee_tokens", kind: "message", T: FeeToken, repeated: true },
    { no: 2, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetFeeTokens {
    return new MsgSetFeeTokens().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetFeeTokens {
    return new MsgSetFeeTokens().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetFeeTokens {
    return new MsgSetFeeTokens().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSetFeeTokens | PlainMessage<MsgSetFeeTokens> | undefined, b: MsgSetFeeTokens | PlainMessage<MsgSetFeeTokens> | undefined): boolean {
    return proto3.util.equals(MsgSetFeeTokens, a, b);
  }
}

/**
 * @generated from message osmosis.txfees.v1beta1.MsgSetFeeTokensResponse
 */
export class MsgSetFeeTokensResponse extends Message<MsgSetFeeTokensResponse> {
  constructor(data?: PartialMessage<MsgSetFeeTokensResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.txfees.v1beta1.MsgSetFeeTokensResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetFeeTokensResponse {
    return new MsgSetFeeTokensResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetFeeTokensResponse {
    return new MsgSetFeeTokensResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetFeeTokensResponse {
    return new MsgSetFeeTokensResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSetFeeTokensResponse | PlainMessage<MsgSetFeeTokensResponse> | undefined, b: MsgSetFeeTokensResponse | PlainMessage<MsgSetFeeTokensResponse> | undefined): boolean {
    return proto3.util.equals(MsgSetFeeTokensResponse, a, b);
  }
}
