import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Roboto+Mono:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />

                <link rel="apple-touch-icon" sizes="57x57" href="/assets/meta/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/assets/meta/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/assets/meta/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/assets/meta/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/assets/meta/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/assets/meta/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/assets/meta/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/assets/meta/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/meta/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/assets/meta/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/meta/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/assets/meta/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/meta/favicon-16x16.png" />
                <link rel="manifest" href="/assets/meta/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/assets/meta/ms-icon-144x144.png" />
                <meta name="theme-color" content="#005EFF"></meta>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}