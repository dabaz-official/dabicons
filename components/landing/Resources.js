import Image from "next/image"
import Link from "next/link"

export default function Resources () {
  return (
    <section id="resources" aria-labelledby="resources-title" className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32 text">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <h2 className="inline-flex items-center rounded-full py-1 px-4 text-blue-600 ring-1 ring-inset ring-blue-600" id="resources-title">
          <span className="font-mono text-sm" aria-hidden="true">01</span>
          <span className="ml-3 h-3.5 w-px bg-blue-600/20"></span>
          <span className="ml-3 text-base font-medium tracking-tight">Resources</span>
        </h2>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Tools and resources you can use to get started even faster and progress even further.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Design assets and a community of fellow icon designers where you can ask questions, get feedback, and accelerate your learning.
        </p>
      </div>
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mt-16">
        <ol role="list" className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20">
          <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
              <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                <Image alt="Figma" src="/figma.svg" width="160" height="144" decoding="async" data-nimg="future" loading="lazy" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium tracking-tight text-slate-900">
                Figma files
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Pefectly structured files for all the icons.
              </p>
            </div>
          </li>
          <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
            <Link href="https://discord.gg/rq73MhKH">
              <a>
                <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                  <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
                    <Image alt="Discord" src="/discord.svg" width="160" height="144" decoding="async" data-nimg="future" loading="lazy" />
                  </div>
                </div>
              </a>
            </Link>
            <div>
              <h3 className="text-base font-medium tracking-tight text-slate-900">
                Community of DabIcon users
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                A Discord server where you can get in touch with other users of DabIcons.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}