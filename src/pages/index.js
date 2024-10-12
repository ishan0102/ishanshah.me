import Head from "next/head";
import { Home } from "../components/Home";

export default function home() {
  return (
    <>
      <Home />
      <Head>
        <title>Ishan Shah</title>
        <meta property="og:title" content="Ishan Shah" key="title" />
      </Head>
    </>
  );
}
