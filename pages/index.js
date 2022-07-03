import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Website of kalil0321!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <div>GitHub</div>
          <div>Math</div>
          <div>CS</div>
        </div>
        <Header title="This is the website of kalil0321." />
        <p className="description">
          I am currently a Bachelor CS student at <a href="https://www.epfl.ch/fr/">EPFL</a>.
        </p>
    
      </main>

      <Footer />
    </div>
  )
}
