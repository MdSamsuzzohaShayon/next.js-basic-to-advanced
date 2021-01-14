// A custom Document is commonly used to augment your application's <html> and <body> tags. This is necessary because Next.js pages skip the definition of the surrounding document's markup.
// https://nextjs.org/docs/advanced-features/custom-document


import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class CustomDocument extends Document{
    render(){
        return (
            <Html>
                <Head>
                    <meta property="custom" content="yellow" />
                </Head>
                <body>
                    <Main></Main>
                </body>
                <NextScript />
            </Html>
        );
    }
}