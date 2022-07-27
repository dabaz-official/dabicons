import Link from "next/link";

export default function Pricing () {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <h2 className="inline-flex items-center rounded-full py-1 px-4 text-blue-600 ring-1 ring-inset ring-blue-600" id="pricing-title">
          <span className="font-mono text-sm" aria-hidden="true">02</span>
          <span className="ml-3 h-3.5 w-px bg-blue-600/20"></span>
          <span className="ml-3 text-base font-medium tracking-tight text">Pricing</span>
        </h2>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">Pick your package</p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">DabIcons is available in two different packages so you can pick the one that&apos;s right for you.</p>
      </div>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <div className="relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12">
            <div className="relative flex flex-col">
              <h3 className="mt-7 text-lg font-semibold tracking-tight text-slate-900">Essentials</h3>
              <p className="mt-2 text-lg tracking-tight text-slate-600">The perfect starting point.</p>
              <p className="order-first flex font-display font-bold">
                <span className="text-[1.75rem] leading-tight text-slate-500">$</span>
                <span className="ml-1 mt-1 text-7xl tracking-tight text-slate-900">15</span>
              </p>
              <div className="order-last mt-8">
                <ul role="list" className="-my-2 divide-y text-base tracking-tight divide-slate-200 text-slate-900">
                  <li className="flex py-2">
                    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 flex-none fill-slate-600">
                      <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                    </svg>
                    <span className="ml-4 pt-1">40 icons</span>
                  </li>
                  <li className="flex py-2">
                    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 flex-none fill-slate-600">
                      <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                    </svg>
                    <span className="ml-4 pt-1">The Figma file of these 40 icons</span>
                  </li>
                </ul>
              </div>
              <Link href="/#">
                <a className="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900 mt-8" aria-label="Get started with the Essential plan for $15">Get started</a>
              </Link>
            </div>
          </div>
          <div className="relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12 bg-blue-600 sm:shadow-lg">
            <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                <defs>
                  <pattern id=":R6lm:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="50%">
                    <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#:R6lm:)"></rect>
              </svg>
            </div>
            <div className="relative flex flex-col">
              <h3 className="mt-7 text-lg font-semibold tracking-tight text-white">Complete</h3>
              <p className="mt-2 text-lg tracking-tight text-white">Everything of DabIcons.</p>
              <p className="order-first flex font-display font-bold">
                <span className="text-[1.75rem] leading-tight text-blue-200">$</span>
                <span className="ml-1 mt-1 text-7xl tracking-tight text-white">40</span>
              </p>
              <div className="order-last mt-8">
                <ul role="list" className="-my-2 divide-y text-base tracking-tight divide-white/10 text-white">
                  <li className="flex py-2">
                    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 flex-none fill-white">
                      <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                    </svg>
                    <span className="ml-4 pt-1">All icons</span>
                  </li>
                  <li className="flex py-2">
                    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 flex-none fill-white">
                      <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                    </svg>
                    <span className="ml-4 pt-1">The Figma file of all the icons</span>
                  </li>
                </ul>
              </div>
              <Link href="/#">
                <a className="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600 mt-8" aria-label="Get started with the Complete plan for $40">Get started</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}