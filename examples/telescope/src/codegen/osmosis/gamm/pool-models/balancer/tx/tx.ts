import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet } from "../../../../../helpers";
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
  sender: string;
  poolParams: PoolParams;
  poolAssets: PoolAsset[];
  futurePoolGovernor: string;
}
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPoolSDKType {
  sender: string;
  pool_params: PoolParamsSDKType;
  pool_assets: PoolAssetSDKType[];
  future_pool_governor: string;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponse {
  poolId: bigint;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponseSDKType {
  pool_id: bigint;
}
function createBaseMsgCreateBalancerPool(): MsgCreateBalancerPool {
  return {
    sender: "",
    poolParams: PoolParams.fromPartial({}),
    poolAssets: [],
    futurePoolGovernor: ""
  };
}
export const MsgCreateBalancerPool = {
  encode(message: MsgCreateBalancerPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.futurePoolGovernor !== "") {
      writer.uint32(34).string(message.futurePoolGovernor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBalancerPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.futurePoolGovernor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateBalancerPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e: any) => PoolAsset.fromJSON(e)) : [],
      futurePoolGovernor: isSet(object.futurePoolGovernor) ? String(object.futurePoolGovernor) : ""
    };
  },
  toJSON(message: MsgCreateBalancerPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined);
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.poolAssets = [];
    }
    message.futurePoolGovernor !== undefined && (obj.futurePoolGovernor = message.futurePoolGovernor);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateBalancerPool>): MsgCreateBalancerPool {
    const message = createBaseMsgCreateBalancerPool();
    message.sender = object.sender ?? "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    return message;
  }
};
function createBaseMsgCreateBalancerPoolResponse(): MsgCreateBalancerPoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const MsgCreateBalancerPoolResponse = {
  encode(message: MsgCreateBalancerPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBalancerPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBalancerPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateBalancerPoolResponse {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateBalancerPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse {
    const message = createBaseMsgCreateBalancerPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  }
};