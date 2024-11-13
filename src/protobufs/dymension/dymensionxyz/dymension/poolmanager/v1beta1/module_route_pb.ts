// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file dymensionxyz/dymension/poolmanager/v1beta1/module_route.proto (package dymensionxyz.dymension.poolmanager.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * PoolType is an enumeration of all supported pool types.
 *
 * @generated from enum dymensionxyz.dymension.poolmanager.v1beta1.PoolType
 */
export enum PoolType {
  /**
   * Balancer is the standard xy=k curve. Its pool model is defined in x/gamm.
   *
   * @generated from enum value: Balancer = 0;
   */
  Balancer = 0,
}
// Retrieve enum metadata with: proto3.getEnumType(PoolType)
proto3.util.setEnumType(PoolType, "dymensionxyz.dymension.poolmanager.v1beta1.PoolType", [
  { no: 0, name: "Balancer" },
]);

/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 *
 * @generated from message dymensionxyz.dymension.poolmanager.v1beta1.ModuleRoute
 */
export class ModuleRoute extends Message<ModuleRoute> {
  /**
   * pool_type specifies the type of the pool
   *
   * @generated from field: dymensionxyz.dymension.poolmanager.v1beta1.PoolType pool_type = 1;
   */
  poolType = PoolType.Balancer;

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  constructor(data?: PartialMessage<ModuleRoute>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.poolmanager.v1beta1.ModuleRoute";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_type", kind: "enum", T: proto3.getEnumType(PoolType) },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleRoute {
    return new ModuleRoute().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleRoute {
    return new ModuleRoute().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleRoute {
    return new ModuleRoute().fromJsonString(jsonString, options);
  }

  static equals(a: ModuleRoute | PlainMessage<ModuleRoute> | undefined, b: ModuleRoute | PlainMessage<ModuleRoute> | undefined): boolean {
    return proto3.util.equals(ModuleRoute, a, b);
  }
}

