import Image from "next/image"

export default function Navbar () {
  return (
    <nav className="py-12 flex justify-between bg-transparent">
      <div className="flex flex-row justify-center items-center">
        <Image src="/logo.png" width={36} height={36} alt="logo" className="h-8 w-auto" />
        <h1 className="px-2 text-3xl text-white display text-center my-auto font-bold sm:hidden">DabIcons</h1>
      </div>
      <div className="flex flex-row justify-center items-center my-auto">
        <a href="#" className="text-white text-lg px-2">
          Docs
        </a>
        <a href="#" className="ml-2 text-lg px-6 py-2 bg-green-600 text-white hover:bg-green-700 rounded-full transition active:ring">
          Github
        </a>
      </div>
    </nav>
  )
}