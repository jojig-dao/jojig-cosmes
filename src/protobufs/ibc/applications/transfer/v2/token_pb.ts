// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v2/token.proto (package ibc.applications.transfer.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Hop } from "../v1/transfer_pb.js";

/**
 * Token defines a struct which represents a token to be transferred.
 *
 * @generated from message ibc.applications.transfer.v2.Token
 */
export class Token extends Message<Token> {
  /**
   * the token denomination
   *
   * @generated from field: ibc.applications.transfer.v2.Denom denom = 1;
   */
  denom?: Denom;

  /**
   * the token amount to be transferred
   *
   * @generated from field: string amount = 2;
   */
  amount = "";

  constructor(data?: PartialMessage<Token>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v2.Token";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "message", T: Denom },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Token {
    return new Token().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Token {
    return new Token().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Token {
    return new Token().fromJsonString(jsonString, options);
  }

  static equals(a: Token | PlainMessage<Token> | undefined, b: Token | PlainMessage<Token> | undefined): boolean {
    return proto3.util.equals(Token, a, b);
  }
}

/**
 * Denom holds the base denom of a Token and a trace of the chains it was sent through.
 *
 * @generated from message ibc.applications.transfer.v2.Denom
 */
export class Denom extends Message<Denom> {
  /**
   * the base token denomination
   *
   * @generated from field: string base = 1;
   */
  base = "";

  /**
   * the trace of the token
   *
   * @generated from field: repeated ibc.applications.transfer.v1.Hop trace = 3;
   */
  trace: Hop[] = [];

  constructor(data?: PartialMessage<Denom>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v2.Denom";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "trace", kind: "message", T: Hop, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Denom {
    return new Denom().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Denom {
    return new Denom().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Denom {
    return new Denom().fromJsonString(jsonString, options);
  }

  static equals(a: Denom | PlainMessage<Denom> | undefined, b: Denom | PlainMessage<Denom> | undefined): boolean {
    return proto3.util.equals(Denom, a, b);
  }
}
