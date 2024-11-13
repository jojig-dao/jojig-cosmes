/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Chain.json is a metadata file that contains information about a blockchain.
 */
export type ChainRegistryChainInfo = ChainRegistryChainInfo1 & ChainRegistryChainInfo2;
export type ChainRegistryChainInfo1 = {
  [k: string]: unknown | undefined;
};
/**
 * Simple version string (e.g., 'v1.0.0').
 */
export type Version = string;
/**
 * URL of the code repository.
 */
export type Repo = string;
/**
 * Detailed version identifier (e.g., 'v1.0.0-a1s2f43g').
 */
export type Tag = string;

export interface ChainRegistryChainInfo2 {
  $schema?: string;
  chain_name: string;
  /**
   * The 'type' of chain as the corresponding CAIP-2 Namespace value. E.G., 'cosmos' or 'eip155'. Namespaces cna be found here: https://github.com/ChainAgnostic/namespaces/tree/main.
   */
  chain_type:
    | "cosmos"
    | "eip155"
    | "bip122"
    | "polkadot"
    | "solana"
    | "algorand"
    | "arweave"
    | "ergo"
    | "fil"
    | "hedera"
    | "monero"
    | "reef"
    | "stacks"
    | "starknet"
    | "stellar"
    | "tezos"
    | "vechain"
    | "waves"
    | "xrpl"
    | "unknown";
  chain_id?: string;
  pre_fork_chain_name?: string;
  pretty_name?: string;
  website?: string;
  status?: "live" | "upcoming" | "killed";
  network_type?: "mainnet" | "testnet" | "devnet";
  /**
   * The default prefix for the human-readable part of addresses that identifies the coin type. Must be registered with SLIP-0173. E.g., 'cosmos'
   */
  bech32_prefix?: string;
  /**
   * Used to override the bech32_prefix for specific uses.
   */
  bech32_config?: {
    /**
     * e.g., 'cosmos'
     */
    bech32PrefixAccAddr?: string;
    /**
     * e.g., 'cosmospub'
     */
    bech32PrefixAccPub?: string;
    /**
     * e.g., 'cosmosvaloper'
     */
    bech32PrefixValAddr?: string;
    /**
     * e.g., 'cosmosvaloperpub'
     */
    bech32PrefixValPub?: string;
    /**
     * e.g., 'cosmosvalcons'
     */
    bech32PrefixConsAddr?: string;
    /**
     * e.g., 'cosmosvalconspub'
     */
    bech32PrefixConsPub?: string;
  };
  daemon_name?: string;
  node_home?: string;
  key_algos?: ("secp256k1" | "ethsecp256k1" | "ed25519" | "sr25519" | "bn254")[];
  slip44?: number;
  alternative_slip44s?: number[];
  fees?: {
    fee_tokens: FeeToken[];
  };
  staking?: {
    staking_tokens: StakingToken[];
    lock_duration?: {
      /**
       * The number of blocks for which the staked tokens are locked.
       */
      blocks?: number;
      /**
       * The approximate time for which the staked tokens are locked.
       */
      time?: string;
    };
  };
  codebase?: {
    git_repo?: string;
    recommended_version?: string;
    compatible_versions?: string[];
    language?: Language;
    binaries?: Binaries;
    sdk?: Sdk;
    consensus?: Consensus;
    cosmwasm?: Cosmwasm;
    ibc?: Ibc;
    genesis?: {
      name?: string;
      genesis_url: string;
      ics_ccv_url?: string;
    };
    versions?: {
      /**
       * Official Upgrade Name
       */
      name: string;
      /**
       * Git Upgrade Tag
       */
      tag?: string;
      /**
       * Block Height
       */
      height?: number;
      /**
       * Proposal that will officially signal community acceptance of the upgrade.
       */
      proposal?: number;
      /**
       * [Optional] Name of the previous version
       */
      previous_version_name?: string;
      /**
       * [Optional] Name of the following version
       */
      next_version_name?: string;
      recommended_version?: string;
      compatible_versions?: string[];
      language?: Language;
      sdk?: Sdk;
      consensus?: Consensus;
      cosmwasm?: Cosmwasm;
      ibc?: Ibc;
      binaries?: Binaries;
    }[];
  };
  images?: (
    | {
        [k: string]: unknown | undefined;
      }
    | {
        [k: string]: unknown | undefined;
      }
  )[];
  logo_URIs?: {
    png?: string;
    svg?: string;
  };
  description?: string;
  peers?: {
    seeds?: Peer[];
    persistent_peers?: Peer[];
  };
  apis?: {
    rpc?: Endpoint[];
    rest?: Endpoint[];
    grpc?: Endpoint[];
    wss?: Endpoint[];
    "grpc-web"?: Endpoint[];
    "evm-http-jsonrpc"?: Endpoint[];
  };
  explorers?: Explorer[];
  keywords?: string[];
  extra_codecs?: ("ethermint" | "injective")[];
}
export interface FeeToken {
  denom: string;
  fixed_min_gas_price?: number;
  low_gas_price?: number;
  average_gas_price?: number;
  high_gas_price?: number;
  gas_costs?: {
    cosmos_send?: number;
    ibc_transfer?: number;
  };
}
export interface StakingToken {
  denom: string;
}
export interface Language {
  type: "go" | "rust" | "solidity" | "other";
  version?: Version;
  repo?: Repo;
  tag?: Tag;
}
export interface Binaries {
  "linux/amd64"?: string;
  "linux/arm64"?: string;
  "darwin/amd64"?: string;
  "darwin/arm64"?: string;
  "windows/amd64"?: string;
  "windows/arm64"?: string;
}
export interface Sdk {
  type: "cosmos" | "penumbra" | "other";
  version?: Version;
  repo?: Repo;
  tag?: Tag;
}
export interface Consensus {
  type: "tendermint" | "cometbft" | "sei-tendermint";
  version?: Version;
  repo?: Repo;
  tag?: Tag;
}
export interface Cosmwasm {
  version?: Version;
  repo?: Repo;
  tag?: Tag;
  enabled?: boolean;
  /**
   * Relative path to the cosmwasm directory. ex. $HOME/.juno/data/wasm
   */
  path?: string;
}
export interface Ibc {
  type: "go" | "rust" | "other";
  version?: Version;
  repo?: Repo;
  tag?: Tag;
  /**
   * List of IBC apps (usually corresponding to a ICS standard) which have been enabled on the network.
   */
  ics_enabled?: ("ics20-1" | "ics27-1" | "mauth")[];
}
export interface Peer {
  id: string;
  address: string;
  provider?: string;
}
export interface Endpoint {
  address: string;
  provider?: string;
  archive?: boolean;
}
export interface Explorer {
  kind?: string;
  url?: string;
  tx_page?: string;
  account_page?: string;
  validator_page?: string;
  proposal_page?: string;
  block_page?: string;
}
