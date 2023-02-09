import { LogRocket } from "@/components";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marieflor Bawanan — Frontend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LogRocket />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
