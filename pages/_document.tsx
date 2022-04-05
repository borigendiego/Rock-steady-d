import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Rock Steady Digital</title>
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="Rock Steady"
                        content="Blockchain. Metaverse. Digital Consulting. Create Solutions to Transform L.I.F.E. Living In Freedom Everyday"
                    />
                    <meta
                        name="description"
                        content="We help SMEs and Start-ups in their digital transformation and requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations."
                    />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='Rock Steady' />
                    <meta property='og:description' content="We help SMEs and Start-ups in their digital transformation and requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations." />
                    <meta property='og:site_name' content='Rock Steady' />

                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-QVD84SY2D8"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-QVD84SY2D8', {
                                  page_path: window.location.pathname,
                                });
                              `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
