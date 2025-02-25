// connectors.js
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // IDs de las cadenas de Ethereum que deseas soportar
});

const walletconnect = new WalletConnectConnector({
  rpc: { 1: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID' }, // Cambia YOUR_INFURA_PROJECT_ID por tu ID de proyecto Infura
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

export { injected, walletconnect };
