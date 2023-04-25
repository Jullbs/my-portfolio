import { Icon } from '@iconify/react'

export default function Skills() {
  const skills = [
    { title: 'React', icon: 'devicon:react' },
    { title: 'Typescript', icon: 'devicon:typescript' },
    { title: 'Next.js', icon: 'skill-icons:nextjs-dark' },
    { title: 'Tailwind', icon: 'vscode-icons:file-type-tailwind' },
    { title: 'Styled-Components', icon: 'skill-icons:styledcomponents' },
    { title: 'Javascript', icon: 'skill-icons:javascript' },
    { title: 'Axios', icon: 'simple-icons:axios' },
    { title: 'Git', icon: 'vscode-icons:file-type-git' },
    { title: 'HTML5', icon: 'vscode-icons:file-type-html' },
    { title: 'CSS3', icon: 'vscode-icons:file-type-css' },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center gap-2 sm:pr-20 md:px-20"
    >
      <p className="pt-24 pl-5 x-sm:pl-10 font-thin italic text-xs text-gray-200">
        &lt;section&gt;
      </p>

      <h2 className="text-4xl x-sm:text-5xl text-white pl-16 x-sm:pl-24">
        &gt; Skills
      </h2>
      <ul className="flex flex-shrink flex-wrap max-w-[60rem] mx-auto justify-center gap-16 pt-20 pb-10">
        {skills.map((skill) => {
          return (
            <li key={skill.title} className="flex flex-col gap-2 items-center">
              <Icon icon={skill.icon} className="w-32 h-32 text-purple-600" />
              <p className="text-sm text-gray-200">{skill.title}</p>
            </li>
          )
        })}
      </ul>

      <p className="pl-5 x-sm:pl-10 font-thin italic text-xs text-gray-200">
        &lt;&#47;section&gt;
      </p>
    </section>
  )
}
