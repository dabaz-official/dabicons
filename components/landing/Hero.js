import Link from "next/link"

export default function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
              <defs>
                <pattern id=":R196:" width="128" height="128" patternUnits="userSpaceOnUse" x="100%" y="100%" patternTransform="translate(112 64)">
                  <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#:R196:)"></rect>
            </svg>
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <img alt="hero pic" src="/hero.png" width="960" height="1284" class="w-full" />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-slate-100"></div>
          <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
            <blockquote className="mt-2">
              <p className="font-display text-xl font-medium text-slate-900">
                "These simple & beautiful icons are designed for UI design and front-end development."
              </p>
            </blockquote>
            <figcaption className="mt-2 text-sm text-slate-500">
              <strong className="semibold text-blue-600 before:content-['—_']">
                <Link href="https://dabaz.vercel.app/">
                  <a>DabAZ</a>
                </Link>
              </strong>
              , Founder of DabIcons
            </figcaption>
          </figure>
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-bold text-slate-900 sm:text-6xl">
              DabIcons
            </h1>
            <p className="mt-4 text-3xl text-slate-600 text">
              Designing, developing, you can use these icons everywhere you want.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="#get-samples">
                <a className="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600 text">Get samples</a>
              </Link>
              <Link href="/buy">
                <a className="inline-flex justify-center rounded-md border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-base font-semibold tracking-tight focus:outline-none border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent text">Buy all the icons</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}