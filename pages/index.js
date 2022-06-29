import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='bg-neutral-900 text-white'>
      <div className="container mx-auto px-2">
        <Head>
          <title>DabIcons</title>
          <link rel="icon" href="/logo.png" />
        </Head>

        <Navbar />

        <div className="flex flex-row justify-between bg-[url('/img/illustration.png')]">
          <div className='flex flex-col'>
            <div className='pt-32'>
              <div className='bg-gray-200 inline-flex justify-center items-center rounded-full'>
                <div className='bg-green-600 font-medium px-2 rounded-full m-1'>
                  Available
                </div>
                <p className='text-black font-medium px-2 mr-2'>
                  This autumn
                </p>
              </div>
            </div>
            <h1 className='text-7xl font-bold pt-8 display mr-12'>
              Beautiful handmade icons 
            </h1>
            <h1 className='text-7xl font-bold pt-2 display mr-12'>
              designed by <a href='https://dabaz.vercel.app' target='_blank' rel="noopener">DabAZ</a>
            </h1>
            <div className='pt-8'>
              <a href='#' className='px-6 py-2 bg-green-600 rounded-full inline-flex hover:bg-green-700 transition justify-center items-center text-lg'>
                Learn more
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
