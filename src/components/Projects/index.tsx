import { Icon } from '@iconify/react'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Cloud Weather',
      status: 'concluded',
      image: '/static/images/cloud-weather.png',
      description:
        'A web app that, based on your location displays, the weather of the week, the air quality, the sunrise and sunset hour. It uses geolocation to get the current latitude and longitude of the user.',
      tecnologies: ['Next.js', 'ReactJS', 'Typescript', 'Tailwind', 'Rest API'],
      url: 'https://01-cloud-weather.vercel.app/',
      repository: 'https://github.com/Jullbs/01-cloud-weather',
    },
    {
      title: 'Coffee Delivery',
      status: 'concluded',
      image: '/static/images/coffee-delivery.png',
      description:
        'A web app that consists of 3 pages: Home, Checkout and CheckoutSuccessfully. The products, their information and the stock were stored in a json-server. Context and reducer were used to handle carts actions. For the forms, the react hook form was chosen together with zod for validation.',
      tecnologies: [
        'ReactJS',
        'Typescript',
        'Styled-Components',
        'json-server',
      ],
      url: 'https://03-ignite-coffee-delivery.vercel.app/',
      repository: 'https://github.com/Jullbs/03-ignite-coffee-delivery',
    },
    {
      title: 'Rick and Morty Info',
      status: 'in progress',
      image: '/static/images/rick-and-morty.png',
      description:
        'In development: A web app that fetches information about the universe and characters of Rick and Morty from a GraphQL api and displays it for the user.',
      tecnologies: ['Next.js', 'ReactJS', 'Typescript', 'Tailwind', 'GraphQL'],
      url: '',
      repository: '',
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center gap-2 sm:pr-20 md:px-20"
    >
      <p className="pt-24 pl-5 x-sm:pl-10 font-thin italic text-xs text-gray-200">
        &lt;section&gt;
      </p>
      <p className="text-4xl x-sm:text-5xl text-white pl-16 x-sm:pl-24">
        &gt; Projects
      </p>
      <ul className="flex flex-col flex-wrap items-center justify-center gap-28 pt-20 pb-10 px-4 sm:pl-10 lg:pl-24">
        {projects.map((project) => {
          return (
            <li
              key={project.title}
              className="max-w-[80rem] flex items-center max-[1210px]:flex-wrap max-[1210px]:justify-center gap-16 text-white"
            >
              <Image
                src={project.image}
                width={300}
                height={100}
                quality={100}
                alt=""
                className="w-[31.25rem] h-[15.125rem] rounded-3xl object-cover"
              />

              <div className="flex flex-col flex-wrap gap-8 m-auto ">
                <span className="flex justify-between">
                  <h2 className="text-xl font-bold self-end">
                    {project.title}
                  </h2>
                  {project.status === 'concluded' ? (
                    <div className="flex gap-8 text-acid-green">
                      <a href={project.url} target="_blank">
                        <Icon
                          icon="ph:magnifying-glass-bold"
                          className="w-8 h-8 hover:scale-125 transition ease-in duration-300"
                        />
                      </a>
                      <a href={project.repository} target="_blank">
                        <Icon
                          icon="ph:code-bold"
                          className="w-8 h-8 hover:scale-125 transition ease-in duration-300"
                        />
                      </a>
                    </div>
                  ) : (
                    <Icon
                      icon="fluent-mdl2:progress-ring-dots"
                      className="w-8 h-8 text-acid-green hover:animate-spin-slow transition ease-in"
                    />
                  )}
                </span>
                <p className="font-extralight text-gray-300">
                  &#47;&#47; {project.description}
                </p>
                <span className="flex flex-wrap justify-center text-baby-blue">
                  {project.tecnologies.map((tech) => {
                    return (
                      <p
                        key={tech}
                        className="px-4 sm:border-r-2 sm:last:border-0 sm:border-baby-blue"
                      >
                        {tech}
                      </p>
                    )
                  })}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
      <p className="pl-5 x-sm:pl-10 font-thin italic text-xs text-gray-200">
        &lt;&#47;section&gt;
      </p>
      <p className="font-thin italic text-xs text-gray-200">
        &lt;&#47;main&gt;
      </p>
    </section>
  )
}
