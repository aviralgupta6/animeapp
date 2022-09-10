import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => (
  <Html>
    <Head></Head>
    <body className="bg-background-dark m-3.5">
      <Main />
      <NextScript />
      <Script
        src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"
        strategy="beforeInteractive"
        onLoad={() => {
          console.log("LODADLOAADDDEDDD");
        }}
      />
    </body>
  </Html>
);

export default Document;
