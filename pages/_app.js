
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '../components/connect_button/WalletModalProvider';
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { AppProps } from 'next/app';
import React, { FC, useMemo, useEffect } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import Script from 'next/script'
import { useRouter } from 'next/router'

import { Connection } from '@solana/web3.js';

// Use require instead of import since order matters
require('../styles/main.css');



export default function MyApp({ Component, pageProps }) {
    const { connected } = useWallet();
    
    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
    const network = WalletAdapterNetwork.Mainnet;

    // You can also provide a custom RPC endpoint
    //const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const endpoint = "https://try-rpc.mainnet.solana.blockdaemon.tech";
    // const endpoint = "https://api.devnet.solana.com"
    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
            new LedgerWalletAdapter(),
            new SolletWalletAdapter({ network }),
            new SolletExtensionWalletAdapter({ network }),
        ],
        [network]
    );
    
    return (
        <>

                                <ConnectionProvider endpoint={endpoint}>
                                    <WalletProvider wallets={wallets} autoConnect>
                                            <WalletModalProvider>
                                                
                                                <Component {...pageProps} />
                                            
                                            </WalletModalProvider>
                                    </WalletProvider>
                                </ConnectionProvider>
         </>
    );
};

