import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Founder from '../components/landing/Author'
import Hero from '../components/landing/Hero'
import Introduction from '../components/landing/Introduction'
import Pricing from '../components/landing/Pricing'
import Resources from '../components/landing/Resources'
import Samples from '../components/landing/Samples'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DabIcons</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Hero />

      <Introduction />

      <Resources />

      <Samples />

      <Pricing />

      <Founder />

      <Footer />
    </div>
  )
}
