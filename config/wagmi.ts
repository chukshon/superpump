import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
  arbitrum,
  base,
  fantom,
  mainnet,
  optimism,
  polygon,
  sepolia,
  fantomTestnet,
} from "wagmi/chains";
import { createConfig, http } from "@wagmi/core";

export const config = getDefaultConfig({
  appName: "Superpumpfun wallet connect setup",
  projectId: "4e21c4d7a9f2f2f5d090522d62a637d7",
  chains: [mainnet, polygon, optimism, arbitrum, base, fantom, fantomTestnet],
  transports: {
    [fantomTestnet.id]: http("https://rpc.testnet.fantom.network"),
  },
  ssr: true,
});
