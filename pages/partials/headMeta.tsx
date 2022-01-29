import Head from "next/head";

const HeadMeta = ({ title = "Breeze Lakes Point", subtitle = "" }) => {
  const pageTitle = `${title}${subtitle ? ` | ${subtitle}` : ""}`;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="A demonstration site for event registrant management"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default HeadMeta;
