import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>cabeça</h1>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
