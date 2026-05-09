import Head from "next/head";
import { useRouter } from "next/router";

export default function MetaHead({
  title = "Waseem Shahzad — Software Engineer & Oracle Flexcube Consultant",
  description = "Software engineer specializing in backend systems, REST APIs, and Oracle Flexcube consulting. Building scalable web & mobile applications.",
}) {
  const router = useRouter();
  const url = `https://waseemshahzad.dev${router?.asPath || ""}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#0a0a0a" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="/Waseem_Shahzad-removebg.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="icon" href="/Icon/hex.ico" />
      <link rel="apple-touch-icon" href="/Icon_png/hex.png" />
    </Head>
  );
}
