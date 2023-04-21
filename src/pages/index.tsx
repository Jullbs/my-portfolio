import Introduction from '@/components/Introduction'
import Socials from '@/components/Socials'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Julbs Portfolio</title>
        <meta name="description" content="A portfolio page by Juliana Daroz." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Socials />

      <Introduction />
    </>
  )
}
