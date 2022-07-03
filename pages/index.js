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
      
          <div><h1>GitHub</h1></div>
          <div><h1>Math & CS</h1></div>
          <div><h1>Courses</h1></div>
       
        <Header title="This is the website of kalil0321." />
        <p className="description">
          I am currently a Bachelor CS student at <a href="https://www.epfl.ch/fr/">EPFL</a>.
        </p>
    
      </main>

      <Footer />
    </div>
  )
}
