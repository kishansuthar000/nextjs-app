import Head from "next/head";


export default function Home() {
  console.log(process.env.BASE_PATH)
  return (
    <>
      <Head>
        <title>QA</title>
      </Head>
      <div>
          <h1>This is QA</h1>
      </div>
    </>
  );
}
