// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/poolmanager/v1beta1/genesis.proto (package dymensionxyz.dymension.poolmanager.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ModuleRoute } from "./module_route_pb.js";

/**
 * GenesisState defines the poolmanager module's genesis state.
 *
 * @generated from message dymensionxyz.dymension.poolmanager.v1beta1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * the next_pool_id
   *
   * @generated from field: uint64 next_pool_id = 1;
   */
  nextPoolId = protoInt64.zero;

  /**
   * pool_routes is the container of the mappings from pool id to pool type.
   *
   * @generated from field: repeated dymensionxyz.dymension.poolmanager.v1beta1.ModuleRoute pool_routes = 2;
   */
  poolRoutes: ModuleRoute[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.poolmanager.v1beta1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "next_pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pool_routes", kind: "message", T: ModuleRoute, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}
