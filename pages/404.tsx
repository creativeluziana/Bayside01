import { NextPage } from 'next'
import Head from 'next/head'

const Custom404: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <main>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </main>
    </div>
  )
}

export default Custom404 