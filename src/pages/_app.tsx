import "@/styles/globals.css";

import "@fsirigm2/obe-example/dist/styles/globals.css";
import "@fsirigm2/obe-example/styles/index.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
