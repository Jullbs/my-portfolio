import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function Socials() {
  const socials = [
    {
      title: 'LinkedIn',
      icon: 'mdi:linkedin',
      url: 'https://www.linkedin.com/in/juliana-daroz-299537252/',
    },
    { title: 'Github', icon: 'mdi:github', url: 'https://github.com/Jullbs' },
    {
      title: 'Codepen',
      icon: 'mdi:codepen',
      url: 'https://codepen.io/jullbs',
    },
  ]

  return (
    <section className="fixed bg-gray-600 p-3 max-sm:bottom-0 max-sm:w-screen sm:right-0 sm:h-screen flex sm:flex-col justify-center gap-6 items-end pr-4 text-gray-100">
      {socials.map((social) => {
        return (
          <Link key={social.title} href={social.url} target="_blank">
            <Icon
              icon={social.icon}
              className="w-10 h-10 hover:cursor-pointer hover:scale-150 hover-plus-transition"
            />
          </Link>
        )
      })}
    </section>
  )
}
