import Link from 'next/link'

export default function Socials() {
  return (
    <section className="fixed right-0 h-screen flex flex-col justify-center gap-6 items-end pr-4 text-gray-100">
      <Link
        href="https://www.linkedin.com/in/juliana-daroz-299537252/"
        target="_blank"
        className="icon-[mdi--linkedin] w-10 h-10 hover:cursor-pointer hover:scale-150 hover-plus-transition"
      ></Link>
      <Link
        href="https://github.com/Jullbs"
        target="_blank"
        className="icon-[mdi--github] w-10 h-10 hover:cursor-pointer hover:scale-150 hover-plus-transition"
      ></Link>
      <Link
        href="https://codepen.io/jullbs"
        target="_blank"
        className="icon-[mdi--codepen] w-10 h-10 hover:cursor-pointer hover:scale-150 hover-plus-transition"
      ></Link>
    </section>
  )
}
