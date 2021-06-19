import { providers, Contract, utils } from "ethers";

// 以下のものがないとwindow.ethereumでエラーが起こる
declare global {
  interface Window {
    ethereum: any;
    chainId: any;
  }
}

// メタマスクに接続していない場合は、アカウントに接続
export const connect = async () => {
  await window.ethereum.request({ method: "eth_requestAccounts" });
};
