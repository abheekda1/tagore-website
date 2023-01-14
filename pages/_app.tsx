import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { init } from '@socialgouv/matomo-next';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        init({ url: 'https://matomo.adawesome.tech/', siteId: '1' });
    });

    return <Component {...pageProps} />;
}

export default MyApp;
