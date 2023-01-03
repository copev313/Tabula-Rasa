import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available:
  const getLayout = Component.getLayout || ((page) => page)

  // Variable for page title:
  const pageTitle = Component.pageTitle || "Tabula Rasa"

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{pageTitle}</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <meta
          name="description"
          content="Generated by create next app"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </div>
  )
}

export default MyApp
