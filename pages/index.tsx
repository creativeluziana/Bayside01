import Head from 'next/head'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Bayside Sports</title>
        <meta name="description" content="Bayside Sports Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Bayside Sports
        </h1>
      </main>
    </div>
  )
}

export default Home 