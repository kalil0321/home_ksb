import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This is the website of kalil0321." />
        <p className="description">
          I'm currently a Bachelor CS student at <a href="epfl.ch"> EPFL</a>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
