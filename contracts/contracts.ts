import factoryContractABI from "./Abi/factoryABI.json";
import poolExecutionerContractABI from "./Abi/pool_executioner.json";

export const factoryContractConfig = {
  address: "0x5A4741Ff25f478d350E14268d561c3f52e0453ED",
  abi: factoryContractABI,
} as const;

export const poolExecutionerContractConfig = {
  abi: poolExecutionerContractABI,
} as const;
