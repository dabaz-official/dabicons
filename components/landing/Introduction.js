import Link from "next/link";

export default function Introduction() {
  return (
    <section id="introduction" aria-label="Introduction" className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 text-lg tracking-tight text-slate-700 text">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Learn more about DabIcons.
        </p>
        <p className="mt-4">
          When I was doing some front-end development and UI design, I always imagined that I could design some icons by myself.
        </p>
        <p className="mt-4">
          And now, I design these icons for all the UI designers and front-end developers.
        </p>
        <p className="mt-4">
          Here are some features of DabIcons:
        </p>
        <ul role="list" class="mt-8 space-y-3">
          <li className="flex">
            <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 flex-none fill-blue-500">
              <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
            </svg>
            <span className="ml-4">Every icon has a solid style and an outline style.</span>
          </li>
          <li className="flex">
            <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 flex-none fill-blue-500">
              <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
            </svg>
            <span className="ml-4">Figma file is included in the complete version.</span>
          </li>
          <li className="flex">
            <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 flex-none fill-blue-500">
              <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
            </svg>
            <span className="ml-4">These icons are simple and well designed.</span>
          </li>
        </ul>
        <p className="mt-10">
          <Link href="#get-samples">
            <a className="text-base font-medium text-blue-600 hover:text-blue-800" href="#get-samples">
              Get some free icons
              <span aria-hidden="true" className="ml-2">→</span>
            </a>
          </Link>
        </p>
      </div>
    </section>
  )
}