import Head from "next/head";
import { Portfolio } from "../components/Portfolio";

export default function portfolio() {
  return (
    <>
      <Portfolio />
      <Head>
        <title>Portfolio • Ishan Shah</title>
        <meta
          property="og:title"
          content="Portfolio • Ishan Shah"
          key="title"
        />
      </Head>
    </>
  );
}
