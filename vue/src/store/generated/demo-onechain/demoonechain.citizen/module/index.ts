// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMintCitizen } from "./types/citizen/tx";
import { MsgTransferOwnership } from "./types/citizen/tx";
import { MsgApprove } from "./types/citizen/tx";


const types = [
  ["/demoonechain.citizen.MsgMintCitizen", MsgMintCitizen],
  ["/demoonechain.citizen.MsgTransferOwnership", MsgTransferOwnership],
  ["/demoonechain.citizen.MsgApprove", MsgApprove],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgMintCitizen: (data: MsgMintCitizen): EncodeObject => ({ typeUrl: "/demoonechain.citizen.MsgMintCitizen", value: MsgMintCitizen.fromPartial( data ) }),
    msgTransferOwnership: (data: MsgTransferOwnership): EncodeObject => ({ typeUrl: "/demoonechain.citizen.MsgTransferOwnership", value: MsgTransferOwnership.fromPartial( data ) }),
    msgApprove: (data: MsgApprove): EncodeObject => ({ typeUrl: "/demoonechain.citizen.MsgApprove", value: MsgApprove.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
