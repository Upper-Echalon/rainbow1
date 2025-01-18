import { jest } from '@jest/globals';

export default {
  calculateL1FeeOptimism: jest.fn(),
  formatGenericAsset: jest.fn(),
  getAssetFromAllAssets: jest.fn(),
  getAccountAsset: jest.fn(),
  getAsset: jest.fn(),
  getAssetPrice: jest.fn(),
  getBalanceAmount: jest.fn(),
  getBasicSwapGasLimit: jest.fn(),
  getBlockExplorer: jest.fn(),
  getDataString: jest.fn(),
  getEtherscanHostForNetwork: jest.fn(),
  getHash: jest.fn(),
  getMultichainAssetAddress: jest.fn(),
  getNativeAssetForNetwork: jest.fn(),
  getNetworkNativeAsset: jest.fn(),
  getPriceOfNativeAssetForNetwork: jest.fn(),
  getUniqueId: jest.fn(),
  hasPreviousTransactions: jest.fn(),
  isEthAddress: jest.fn(),
  openAddressInBlockExplorer: jest.fn(),
  openNftInBlockExplorer: jest.fn(),
  openTokenEtherscanURL: jest.fn(),
  openTransactionInBlockExplorer: jest.fn(),
  padLeft: jest.fn(),
  parseEthereumUrl: jest.fn(),
  removeHexPrefix: jest.fn(),
};
