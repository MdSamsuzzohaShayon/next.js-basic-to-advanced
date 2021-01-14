// A custom Document is commonly used to augment your application's <html> and <body> tags. This is necessary because Next.js pages skip the definition of the surrounding document's markup.
// https://nextjs.org/docs/advanced-features/custom-document


import Document, {Html, Head, Main, NextScript} from 'next/document';

// THIS ONLY EXECUTE ON THE SERVER 
export default class CustomDocument extends Document{
    render(){
        console.log("hello from _document.tsx");
        
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