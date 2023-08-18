// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/autocli/v1/options.proto (package cosmos.autocli.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * ModuleOptions describes the CLI options for a Cosmos SDK module.
 *
 * @generated from message cosmos.autocli.v1.ModuleOptions
 */
export class ModuleOptions extends Message<ModuleOptions> {
  /**
   * tx describes the tx commands for the module.
   *
   * @generated from field: cosmos.autocli.v1.ServiceCommandDescriptor tx = 1;
   */
  tx?: ServiceCommandDescriptor;

  /**
   * query describes the queries commands for the module.
   *
   * @generated from field: cosmos.autocli.v1.ServiceCommandDescriptor query = 2;
   */
  query?: ServiceCommandDescriptor;

  constructor(data?: PartialMessage<ModuleOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.autocli.v1.ModuleOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tx", kind: "message", T: ServiceCommandDescriptor },
    { no: 2, name: "query", kind: "message", T: ServiceCommandDescriptor },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleOptions {
    return new ModuleOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleOptions {
    return new ModuleOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleOptions {
    return new ModuleOptions().fromJsonString(jsonString, options);
  }

  static equals(a: ModuleOptions | PlainMessage<ModuleOptions> | undefined, b: ModuleOptions | PlainMessage<ModuleOptions> | undefined): boolean {
    return proto3.util.equals(ModuleOptions, a, b);
  }
}

/**
 * ServiceCommandDescriptor describes a CLI command based on a protobuf service.
 *
 * @generated from message cosmos.autocli.v1.ServiceCommandDescriptor
 */
export class ServiceCommandDescriptor extends Message<ServiceCommandDescriptor> {
  /**
   * service is the fully qualified name of the protobuf service to build
   * the command from. It can be left empty if sub_commands are used instead
   * which may be the case if a module provides multiple tx and/or query services.
   *
   * @generated from field: string service = 1;
   */
  service = "";

  /**
   * rpc_command_options are options for commands generated from rpc methods.
   * If no options are specified for a given rpc method on the service, a
   * command will be generated for that method with the default options.
   *
   * @generated from field: repeated cosmos.autocli.v1.RpcCommandOptions rpc_command_options = 2;
   */
  rpcCommandOptions: RpcCommandOptions[] = [];

  /**
   * sub_commands is a map of optional sub-commands for this command based on
   * different protobuf services. The map key is used as the name of the
   * sub-command.
   *
   * @generated from field: map<string, cosmos.autocli.v1.ServiceCommandDescriptor> sub_commands = 3;
   */
  subCommands: { [key: string]: ServiceCommandDescriptor } = {};

  /**
   * enhance_custom_commands specifies whether to skip the service when generating commands, if a custom command already exists,
   * or enhance the existing command. If set to true, the custom command will be enhanced with the services from gRPC.
   * otherwise when a custom command exists, no commands will be generated for the service.
   *
   * @generated from field: bool enhance_custom_command = 4;
   */
  enhanceCustomCommand = false;

  constructor(data?: PartialMessage<ServiceCommandDescriptor>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.autocli.v1.ServiceCommandDescriptor";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "rpc_command_options", kind: "message", T: RpcCommandOptions, repeated: true },
    { no: 3, name: "sub_commands", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: ServiceCommandDescriptor} },
    { no: 4, name: "enhance_custom_command", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceCommandDescriptor {
    return new ServiceCommandDescriptor().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceCommandDescriptor {
    return new ServiceCommandDescriptor().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceCommandDescriptor {
    return new ServiceCommandDescriptor().fromJsonString(jsonString, options);
  }

  static equals(a: ServiceCommandDescriptor | PlainMessage<ServiceCommandDescriptor> | undefined, b: ServiceCommandDescriptor | PlainMessage<ServiceCommandDescriptor> | undefined): boolean {
    return proto3.util.equals(ServiceCommandDescriptor, a, b);
  }
}

/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 *
 * @generated from message cosmos.autocli.v1.RpcCommandOptions
 */
export class RpcCommandOptions extends Message<RpcCommandOptions> {
  /**
   * rpc_method is short name of the protobuf rpc method that this command is
   * generated from.
   *
   * @generated from field: string rpc_method = 1;
   */
  rpcMethod = "";

  /**
   * use is the one-line usage method. It also allows specifying an alternate
   * name for the command as the first word of the usage text.
   *
   * By default the name of an rpc command is the kebab-case short name of the
   * rpc method.
   *
   * @generated from field: string use = 2;
   */
  use = "";

  /**
   * long is the long message shown in the 'help <this-command>' output.
   *
   * @generated from field: string long = 3;
   */
  long = "";

  /**
   * short is the short description shown in the 'help' output.
   *
   * @generated from field: string short = 4;
   */
  short = "";

  /**
   * example is examples of how to use the command.
   *
   * @generated from field: string example = 5;
   */
  example = "";

  /**
   * alias is an array of aliases that can be used instead of the first word in Use.
   *
   * @generated from field: repeated string alias = 6;
   */
  alias: string[] = [];

  /**
   * suggest_for is an array of command names for which this command will be suggested -
   * similar to aliases but only suggests.
   *
   * @generated from field: repeated string suggest_for = 7;
   */
  suggestFor: string[] = [];

  /**
   * deprecated defines, if this command is deprecated and should print this string when used.
   *
   * @generated from field: string deprecated = 8;
   */
  deprecated = "";

  /**
   * version defines the version for this command. If this value is non-empty and the command does not
   * define a "version" flag, a "version" boolean flag will be added to the command and, if specified,
   * will print content of the "Version" variable. A shorthand "v" flag will also be added if the
   * command does not define one.
   *
   * @generated from field: string version = 9;
   */
  version = "";

  /**
   * flag_options are options for flags generated from rpc request fields.
   * By default all request fields are configured as flags. They can
   * also be configured as positional args instead using positional_args.
   *
   * @generated from field: map<string, cosmos.autocli.v1.FlagOptions> flag_options = 10;
   */
  flagOptions: { [key: string]: FlagOptions } = {};

  /**
   * positional_args specifies positional arguments for the command.
   *
   * @generated from field: repeated cosmos.autocli.v1.PositionalArgDescriptor positional_args = 11;
   */
  positionalArgs: PositionalArgDescriptor[] = [];

  /**
   * skip specifies whether to skip this rpc method when generating commands.
   *
   * @generated from field: bool skip = 12;
   */
  skip = false;

  constructor(data?: PartialMessage<RpcCommandOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.autocli.v1.RpcCommandOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rpc_method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "use", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "long", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "short", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "example", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "alias", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "suggest_for", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "deprecated", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "flag_options", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: FlagOptions} },
    { no: 11, name: "positional_args", kind: "message", T: PositionalArgDescriptor, repeated: true },
    { no: 12, name: "skip", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RpcCommandOptions {
    return new RpcCommandOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RpcCommandOptions {
    return new RpcCommandOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RpcCommandOptions {
    return new RpcCommandOptions().fromJsonString(jsonString, options);
  }

  static equals(a: RpcCommandOptions | PlainMessage<RpcCommandOptions> | undefined, b: RpcCommandOptions | PlainMessage<RpcCommandOptions> | undefined): boolean {
    return proto3.util.equals(RpcCommandOptions, a, b);
  }
}

/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 *
 * @generated from message cosmos.autocli.v1.FlagOptions
 */
export class FlagOptions extends Message<FlagOptions> {
  /**
   * name is an alternate name to use for the field flag.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * shorthand is a one-letter abbreviated flag.
   *
   * @generated from field: string shorthand = 2;
   */
  shorthand = "";

  /**
   * usage is the help message.
   *
   * @generated from field: string usage = 3;
   */
  usage = "";

  /**
   * default_value is the default value as text.
   *
   * @generated from field: string default_value = 4;
   */
  defaultValue = "";

  /**
   * deprecated is the usage text to show if this flag is deprecated.
   *
   * @generated from field: string deprecated = 6;
   */
  deprecated = "";

  /**
   * shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated.
   *
   * @generated from field: string shorthand_deprecated = 7;
   */
  shorthandDeprecated = "";

  /**
   * hidden hides the flag from help/usage text
   *
   * @generated from field: bool hidden = 8;
   */
  hidden = false;

  constructor(data?: PartialMessage<FlagOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.autocli.v1.FlagOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "shorthand", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "usage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "default_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "deprecated", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "shorthand_deprecated", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "hidden", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlagOptions {
    return new FlagOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlagOptions {
    return new FlagOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlagOptions {
    return new FlagOptions().fromJsonString(jsonString, options);
  }

  static equals(a: FlagOptions | PlainMessage<FlagOptions> | undefined, b: FlagOptions | PlainMessage<FlagOptions> | undefined): boolean {
    return proto3.util.equals(FlagOptions, a, b);
  }
}

/**
 * PositionalArgDescriptor describes a positional argument.
 *
 * @generated from message cosmos.autocli.v1.PositionalArgDescriptor
 */
export class PositionalArgDescriptor extends Message<PositionalArgDescriptor> {
  /**
   * proto_field specifies the proto field to use as the positional arg. Any
   * fields used as positional args will not have a flag generated.
   *
   * @generated from field: string proto_field = 1;
   */
  protoField = "";

  /**
   * varargs makes a positional parameter a varargs parameter. This can only be
   * applied to last positional parameter and the proto_field must a repeated
   * field. Note: It is mutually exclusive with optional.
   *
   * @generated from field: bool varargs = 2;
   */
  varargs = false;

  /**
   * optional makes the last positional parameter optional. 
   * Note: It is mutually exclusive with varargs.
   *
   * @generated from field: bool optional = 3;
   */
  optional = false;

  constructor(data?: PartialMessage<PositionalArgDescriptor>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.autocli.v1.PositionalArgDescriptor";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proto_field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "varargs", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "optional", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PositionalArgDescriptor {
    return new PositionalArgDescriptor().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PositionalArgDescriptor {
    return new PositionalArgDescriptor().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PositionalArgDescriptor {
    return new PositionalArgDescriptor().fromJsonString(jsonString, options);
  }

  static equals(a: PositionalArgDescriptor | PlainMessage<PositionalArgDescriptor> | undefined, b: PositionalArgDescriptor | PlainMessage<PositionalArgDescriptor> | undefined): boolean {
    return proto3.util.equals(PositionalArgDescriptor, a, b);
  }
}

