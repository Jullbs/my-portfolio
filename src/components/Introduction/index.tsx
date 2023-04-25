export default function Introduction() {
  return (
    <section className="h-screen flex flex-col justify-center gap-2 pr-20 md:px-20 mb-[-6rem] font-thin italic text-xs text-gray-200">
      <p>&lt;main&gt;</p>
      <p className="pl-5 x-sm:pl-10">&lt;section&gt;</p>
      <p className="pl-10 x-sm:pl-20">&lt;h1&gt;</p>

      <h1 className="text-6xl font-extrabold not-italic text-white pl-16 x-sm:pl-24">
        Hi there!
        <p>
          I&#39;m <strong className="text-acid-green">Juliana Daroz</strong>
        </p>
      </h1>

      <p className="pl-10 x-sm:pl-20">&lt;&#47;h1&gt;</p>
      <p className="pl-10 x-sm:pl-20">&lt;p&gt;</p>

      <p className="text-xl font-extralight not-italic text-white pl-16 x-sm:pl-24">
        Front-End Web Developer
      </p>

      <p className="pl-10 x-sm:pl-20">&lt;&#47;p&gt;</p>
      <p className="pl-5 x-sm:pl-10">&lt;&#47;section&gt;</p>
    </section>
  )
}
