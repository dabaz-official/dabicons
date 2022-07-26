import Image from "next/image"
import Link from "next/link"

export default function Founder () {
  return (
    <section id="author" aria-labelledby="author-title" className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16">
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
          <defs>
            <pattern id=":Rem:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%">
              <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:Rem:)"></rect>
        </svg>
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image alt="DabAZ" sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem" src="/dabaz.jpg" width="576" height="576" decoding="async" data-nimg="future" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <h2 className="inline-flex items-center rounded-full py-1 px-4 text-blue-600 ring-1 ring-inset ring-blue-600" id="author-title">
              <span className="font-mono text-sm" aria-hidden="true">03</span>
              <span className="ml-3 h-3.5 w-px bg-blue-600/20"></span>
              <span className="ml-3 text-base font-medium tracking-tight">Founder</span>
            </h2>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-600">DabAZ -</span>
              {" "}Hey there, I'm the founder of DabIcons.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              I'm an ethical hacker, musician, designer, and front-end developer. I'm new to my icon-design career, but I believe that I can be the greatest.
            </p>
            <p className="mt-8">
              <Link href="https://twitter.com/dabaz_official">
                <a className="inline-flex items-center text-base font-medium tracking-tight text-blue-600">
                  <svg aria-hidden="true" viewBox="0 0 40 40" className="h-10 w-10 fill-current">
                    <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066"></path>
                  </svg>
                  <span className="ml-4">Follow on Twitter</span>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}