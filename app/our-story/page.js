export const metadata = { title: 'Our Story — Wonder to Build' };

export default function OurStory() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50 py-20 px-6">
        <div className="absolute inset-0 hero-dots opacity-[0.05]" />
        <div className="relative z-10 max-w-3xl mx-auto md:ml-[8%]">
          <div className="section-eyebrow">Our story</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
            Every builder starts somewhere.{' '}
            <span className="text-brand">This is where we started.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
            From a small city in the mountains of Kurdistan to a global mission: the story of why Wonder to Build exists.
          </p>
        </div>
      </section>

      {/* Ibrahim's Story */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="section-eyebrow">The founder</div>
        <h2 className="text-3xl font-bold tracking-tight mb-6">Ibrahim&apos;s story</h2>
        <div className="space-y-5 text-gray-600 leading-relaxed">
          <p>
            Ibrahim Hama Ahmed grew up in Qalladizah, a city in the Kurdistan Region of Iraq where access to advanced technology education was limited but curiosity was not. As a student of Electronics and Telecommunications Engineering at the American University of Kurdistan, he saw the same pattern everywhere: talented young people reproducing existing projects, calling them innovations, and receiving praise for work that wasn&apos;t original.
          </p>
          <p>
            The pattern wasn&apos;t about intelligence. It was about infrastructure. No one had taught these students what genuine innovation looked like, or given them the tools to get there. There were no makerspaces. No structured hardware curriculum. No documentation culture. And when AI tools arrived, the gap got worse — suddenly students could generate entire projects they couldn&apos;t explain.
          </p>
          <p>
            Ibrahim became a CEE fellow, where he developed the framework that would become Wonder to Build. As the Technical Director and host of &ldquo;Future Frontiers&rdquo; at Leopard Radio, he&apos;d already been reaching young people through bilingual science and technology programming. Now he had a plan to reach them with something more: a system for turning curiosity into creation.
          </p>
        </div>

        {/* Photo placeholder */}
        <img src="/images/founder-lab.jpg" alt="Ibrahim Hama Ahmed working on electronics in his lab" className="rounded-2xl w-full h-80 object-cover my-10 shadow-md" />
      </section>

      {/* The Problem */}
      <section className="bg-white border-y border-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="section-eyebrow">The problem we saw</div>
          <h2 className="text-3xl font-bold tracking-tight mb-6">Copy culture isn&apos;t a failure of talent — it&apos;s a failure of systems</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              In many regions around the world, digital literacy is confused with digital creation. A student who can reset a password is called a hacker. A student who follows a YouTube tutorial and builds the same circuit as ten thousand others is called an inventor. Media and communities celebrate these moments because the bar has been set in the wrong place.
            </p>
            <p>
              Students are never given the philosophical framework to understand what originality means, the technical progression to achieve it, or the documentation habits to prove it. Wonder to Build was designed to fix all three.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="section-eyebrow">Our philosophy</div>
        <h2 className="text-3xl font-bold tracking-tight mb-6">The difference between imitation and innovation is training, not talent</h2>
        <div className="space-y-5 text-gray-600 leading-relaxed">
          <p>
            We believe that every student has the capacity to create something the world has never seen. But they need a path that takes them from guided exercises to independent, documented, original work. They need to understand intellectual property not as a legal abstraction but as a creative practice. And in an era of AI-generated everything, they need to be the person in the room who actually understands what they built and why.
          </p>
          <p>
            That&apos;s what Wonder to Build teaches: not just how to build, but how to build something that&apos;s genuinely yours.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-teal-50/50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="section-eyebrow">Mission, vision &amp; values</div>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Mission</h3>
              <p className="text-gray-600 leading-relaxed">To equip students everywhere with the hands-on tools, engineering mindset, and creative confidence to build genuine innovations — and the wisdom to know the difference between creation and imitation.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Vision</h3>
              <p className="text-gray-600 leading-relaxed">A world where every student, regardless of geography or background, can transform curiosity into something the world has never seen before.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Core values</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {[
                  { val: 'Authenticity', desc: 'We build what\'s real' },
                  { val: 'Curiosity', desc: 'Every project starts with a question' },
                  { val: 'Access', desc: 'Geography shouldn\'t limit innovation' },
                  { val: 'Impact', desc: 'We measure by what students build' },
                ].map((v) => (
                  <div key={v.val} className="bg-white rounded-xl p-5 border border-gray-100">
                    <h4 className="font-bold text-brand text-sm mb-1">{v.val}</h4>
                    <p className="text-xs text-gray-500">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="section-eyebrow">Our timeline</div>
        <h2 className="text-3xl font-bold tracking-tight mb-8">Key milestones</h2>
        <div className="space-y-6 border-l-2 border-teal-200 pl-8">
          {[
            { year: '2024', text: 'Ibrahim identifies the innovation gap through his work at AUK and Leopard Radio. Begins developing curriculum framework.' },
            { year: '2025', text: 'CEE fellowship begins. Wonder to Build concept formalized. Curriculum tracks designed. First workshop photos documented.' },
            { year: '2026 H1', text: '501(c)(3) incorporation in progress. Website development. Partnership outreach. Program materials finalized.' },
            { year: '2026 H2', text: 'CEP implementation in Kurdistan. First Spark Workshops in schools. MakerCore pilot cohort. YouTube channel launch.' },
            { year: '2027+', text: 'MENA regional expansion. Educator certification at scale. Innovation Fellowship launch. Annual Innovation Challenge inaugural year.' },
          ].map((m) => (
            <div key={m.year} className="relative">
              <div className="absolute -left-[2.55rem] top-1.5 w-3 h-3 rounded-full bg-brand border-2 border-white" />
              <p className="font-mono text-xs font-bold text-brand mb-1">{m.year}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20 text-center">
        <a href="/get-involved" className="btn-primary no-underline inline-block">Partner with us</a>
      </section>
    </>
  );
}
