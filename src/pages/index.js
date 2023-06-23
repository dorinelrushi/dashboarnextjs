import Image from "next/image";

import Head from "next/head";
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <>
      <main>
        <Dashboard className="d w-[100%]" />
      </main>
    </>
  );
}
