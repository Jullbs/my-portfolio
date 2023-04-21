export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center gap-2 pr-20 sm:px-20"
    >
      <p className="pl-5 x-sm:pl-10 font-thin italic text-xs text-gray-200">
        &lt;section&gt;
      </p>

      <h2 className="text-5xl text-white pl-16 x-sm:pl-24 pb-20">
        &gt; Skills
      </h2>
      <ul className="flex flex-wrap max-w-[60rem] mx-auto justify-center gap-16">
        <li className="flex flex-col gap-2 items-center">
          <span className="icon-[devicon--react] w-32 h-32"></span>
          <p className="text-sm text-gray-200">React</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <span className="icon-[devicon--typescript] w-32 h-32"></span>
          <p className="text-sm text-gray-200">Typescript</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <span className="icon-[skill-icons--nextjs-dark] w-32 h-32"></span>
          <p className="text-sm text-gray-200">Next.js</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <span className="icon-[vscode-icons--file-type-tailwind] w-32 h-32"></span>
          <p className="text-sm text-gray-200">Tailwind</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <span className="icon-[skill-icons--styledcomponents] w-32 h-32"></span>
          <p className="text-sm text-gray-200">Styled-Components</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <span className="icon-[skill-icons--javascript] w-32 h-32"></span>
          <p className="text-sm text-gray-200">Javascript</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <span className="icon-[devicon-plain--axios-wordmark] w-32 h-32 text-purple-600"></span>
          <p className="text-sm text-gray-200">Axios</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <span className="icon-[bi--git] w-32 h-32 text-orange-600"></span>
          <p className="text-sm text-gray-200">Git</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <span className="icon-[vscode-icons--file-type-html] w-32 h-32"></span>
          <p className="text-sm text-gray-200">HTML5</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <span className="icon-[vscode-icons--file-type-css] w-32 h-32"></span>
          <p className="text-sm text-gray-200">CSS3</p>
        </li>
      </ul>

      <p className="pl-5 x-sm:pl-10 font-thin italic text-xs text-gray-200">
        &lt;&#47;section&gt;
      </p>
    </section>
  )
}
