import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
