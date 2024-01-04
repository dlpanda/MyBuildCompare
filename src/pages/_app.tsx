import { AppProps } from 'next/app';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <Script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARDyr8vZwKWFjBpMldFicRhX49JqvVor4&libraries=places&callback=initializeGoogleAPI"
                async
                defer
            />
        </>
    );
}
