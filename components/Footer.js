export default function Footer () {
  return (
    <footer className="relative pt-5 pb-20 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
          <defs>
            <pattern id=":Rf6:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%">
              <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:Rf6:)"></rect>
        </svg>
      </div>
      <div className="relative text-center text-md text-slate-600">
        <p>
          Copyright © 2022 DabWave
        </p>
        <p>
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}