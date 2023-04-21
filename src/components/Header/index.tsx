import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-screen bg-gray-600 flex justify-center gap-10 sm:gap-20 pt-8 sm:p-8 text-white text-base sm:text-xl">
      <Link href="/" className="hover-plus-transition">
        &#47;&#47; Home
      </Link>
      <Link href="#skills" className="hover-plus-transition">
        &#47;&#47; Skills
      </Link>
      <Link href="#projects" className="hover-plus-transition">
        &#47;&#47; Projects
      </Link>
    </header>
  )
}
