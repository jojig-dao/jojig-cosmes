// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file dymensionxyz/dymension/incentives/tx.proto (package dymensionxyz.dymension.incentives, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { QueryCondition } from "../lockup/lock_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * MsgCreateGauge creates a gague to distribute rewards to users
 *
 * @generated from message dymensionxyz.dymension.incentives.MsgCreateGauge
 */
export class MsgCreateGauge extends Message<MsgCreateGauge> {
  /**
   * is_perpetual shows if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled
   *
   * @generated from field: bool is_perpetual = 1;
   */
  isPerpetual = false;

  /**
   * owner is the address of gauge creator
   *
   * @generated from field: string owner = 2;
   */
  owner = "";

  /**
   * distribute_to show which lock the gauge should distribute to by time
   * duration or by timestamp
   *
   * @generated from field: dymensionxyz.dymension.lockup.QueryCondition distribute_to = 3;
   */
  distributeTo?: QueryCondition;

  /**
   * coins are coin(s) to be distributed by the gauge
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 4;
   */
  coins: Coin[] = [];

  /**
   * start_time is the distribution start time
   *
   * @generated from field: google.protobuf.Timestamp start_time = 5;
   */
  startTime?: Timestamp;

  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   *
   * @generated from field: uint64 num_epochs_paid_over = 6;
   */
  numEpochsPaidOver = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCreateGauge>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.MsgCreateGauge";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_perpetual", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "distribute_to", kind: "message", T: QueryCondition },
    { no: 4, name: "coins", kind: "message", T: Coin, repeated: true },
    { no: 5, name: "start_time", kind: "message", T: Timestamp },
    { no: 6, name: "num_epochs_paid_over", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateGauge {
    return new MsgCreateGauge().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateGauge {
    return new MsgCreateGauge().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateGauge {
    return new MsgCreateGauge().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateGauge | PlainMessage<MsgCreateGauge> | undefined, b: MsgCreateGauge | PlainMessage<MsgCreateGauge> | undefined): boolean {
    return proto3.util.equals(MsgCreateGauge, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.MsgCreateGaugeResponse
 */
export class MsgCreateGaugeResponse extends Message<MsgCreateGaugeResponse> {
  constructor(data?: PartialMessage<MsgCreateGaugeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.MsgCreateGaugeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateGaugeResponse {
    return new MsgCreateGaugeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateGaugeResponse {
    return new MsgCreateGaugeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateGaugeResponse {
    return new MsgCreateGaugeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateGaugeResponse | PlainMessage<MsgCreateGaugeResponse> | undefined, b: MsgCreateGaugeResponse | PlainMessage<MsgCreateGaugeResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateGaugeResponse, a, b);
  }
}

/**
 * MsgAddToGauge adds coins to a previously created gauge
 *
 * @generated from message dymensionxyz.dymension.incentives.MsgAddToGauge
 */
export class MsgAddToGauge extends Message<MsgAddToGauge> {
  /**
   * owner is the gauge owner's address
   *
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * gauge_id is the ID of gauge that rewards are getting added to
   *
   * @generated from field: uint64 gauge_id = 2;
   */
  gaugeId = protoInt64.zero;

  /**
   * rewards are the coin(s) to add to gauge
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin rewards = 3;
   */
  rewards: Coin[] = [];

  constructor(data?: PartialMessage<MsgAddToGauge>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.MsgAddToGauge";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "gauge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "rewards", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddToGauge {
    return new MsgAddToGauge().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddToGauge {
    return new MsgAddToGauge().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddToGauge {
    return new MsgAddToGauge().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddToGauge | PlainMessage<MsgAddToGauge> | undefined, b: MsgAddToGauge | PlainMessage<MsgAddToGauge> | undefined): boolean {
    return proto3.util.equals(MsgAddToGauge, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.MsgAddToGaugeResponse
 */
export class MsgAddToGaugeResponse extends Message<MsgAddToGaugeResponse> {
  constructor(data?: PartialMessage<MsgAddToGaugeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.MsgAddToGaugeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddToGaugeResponse {
    return new MsgAddToGaugeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddToGaugeResponse {
    return new MsgAddToGaugeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddToGaugeResponse {
    return new MsgAddToGaugeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddToGaugeResponse | PlainMessage<MsgAddToGaugeResponse> | undefined, b: MsgAddToGaugeResponse | PlainMessage<MsgAddToGaugeResponse> | undefined): boolean {
    return proto3.util.equals(MsgAddToGaugeResponse, a, b);
  }
}

