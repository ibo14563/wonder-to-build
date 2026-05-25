import Link from 'next/link';

export const metadata = { title: 'Programs — Wonder to Build' };

const allPrograms = [
  { id: 'spark', name: 'Spark Workshop', price: 'Free', duration: '1 day', emoji: '⚡', color: 'bg-amber-50 border-t-amber-400', tag: 'In-person · Ages 12+',
    desc: 'The Spark Workshop is where it all begins. We come to your school with a one-day, hands-on introduction to circuits and code using Tinkercad simulation. Students leave with a working project, a taste of what engineering feels like, and an invitation to go further. No cost, no hardware required, no prerequisites.',
    cta: 'Bring a Spark Workshop to your school' },
  { id: 'makercore', name: 'MakerCore Course', price: '$299', duration: '3 months', emoji: '🔧', color: 'bg-teal-50 border-t-teal-500', tag: 'Online + live · Tracks 1 & 2',
    desc: 'MakerCore is the structured foundation of our curriculum. Over three months, students progress through Track 1 (Foundation) and Track 2 (Connected) with live instruction, guided projects, and independent builds. Every student completes the course with a Credly digital badge and a GitHub Pages portfolio showcasing timestamped, original work.',
    cta: 'Apply to MakerCore' },
  { id: 'fellowship', name: 'Innovation Fellowship', price: '$799', duration: '6 months', emoji: '🧠', color: 'bg-purple-50 border-t-purple-500', tag: 'Cohort-based · Track 3: TinyML',
    desc: 'The Innovation Fellowship is our most advanced program. Fellows work in small cohorts over six months, mastering TinyML and Edge Impulse while designing an original project framed around a UN Sustainable Development Goal. The fellowship culminates in a Demo Day where fellows present their work to a panel of engineers, educators, and sponsors.',
    cta: 'Apply to the Fellowship' },
  { id: 'kit', name: 'Monthly Maker Kit', price: 'From $19/mo', duration: 'Ongoing', emoji: '📦', color: 'bg-orange-50 border-t-orange-400', tag: 'Ships globally · 3 tiers',
    desc: 'Every month, we ship a curated kit of components, a project guide, and a challenge to your door. Starter ($19/mo) for beginners, Builder ($35/mo) for intermediate, Advanced ($55/mo) for IoT and edge computing. Every kit includes documentation templates for your GitHub portfolio.',
    cta: 'Get your kit' },
  { id: 'educator', name: 'Educator Certification', price: '$199', duration: 'Self-paced', emoji: '🎓', color: 'bg-blue-50 border-t-blue-500', tag: 'Online · 1 teacher → 500+ students/year',
    desc: 'One certified teacher can reach over 500 students per year. Our Educator Certification program trains teachers to deliver Wonder to Build curriculum in their own classrooms, with full access to lesson plans, project guides, assessment rubrics, and the IP literacy module.',
    cta: 'Certify your teachers' },
  { id: 'bootcamp', name: 'Summer Innovation Bootcamp', price: '$1,200', duration: '2 weeks', emoji: '🏕️', color: 'bg-green-50 border-t-green-500', tag: '50% scholarships · Multi-national cohort',
    desc: 'An intensive two-week experience that brings students from multiple countries together to design and build SDG-framed projects from scratch. Students leave with a completed project, a portfolio entry, and a network of peers across borders.',
    cta: 'Apply to the Bootcamp' },
  { id: 'challenge', name: 'Annual Innovation Challenge', price: 'Free to enter', duration: 'Yearly', emoji: '🏆', color: 'bg-pink-50 border-t-pink-500', tag: 'SDG-themed · Sponsorship-funded',
    desc: 'Each year, we announce a challenge theme aligned with a Sustainable Development Goal. Students and teams submit original projects, competing for recognition, hardware prizes, and fellowship opportunities. Open to all Wonder to Build participants.',
    cta: 'Enter the Challenge' },
  { id: 'youtube', name: 'Future Frontiers on YouTube', price: 'Free', duration: 'Always available', emoji: '📺', color: 'bg-red-50 border-t-red-500', tag: 'Bilingual: Kurdish + English',
    desc: 'Future Frontiers is our free YouTube channel hosted by Ibrahim. Episodes cover everything from basic circuit tutorials to deep dives on TinyML, interviews with engineers, and behind-the-scenes looks at student projects. All content is bilingual in Kurdish and English.',
    cta: 'Watch on YouTube' },
];

export default function Programs() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50 py-20 px-6">
        <div className="absolute inset-0 hero-dots opacity-[0.05]" />
        <div className="relative z-10 max-w-3xl mx-auto md:ml-[8%]">
          <div className="section-eyebrow">Programs</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
            Eight paths to building <span className="text-brand">something real.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
            From your first circuit to your first AI model — choose the program that meets you where you are.
          </p>
        </div>
      </section>

      {/* Curriculum Tracks */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="section-eyebrow">Curriculum tracks</div>
        <h2 className="text-2xl font-bold mb-8">Three progressive tracks — start with free simulation</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { track: 'Track 1 — Foundation', tools: 'Arduino Uno, circuits, sensors, actuators, basic code', desc: 'Learn to make physical things respond to the real world.', color: 'border-l-amber-400' },
            { track: 'Track 2 — Connected', tools: 'ESP32, WiFi, IoT protocols, cloud dashboards', desc: 'Your projects connect to the internet and communicate data in real time.', color: 'border-l-teal-500' },
            { track: 'Track 3 — Intelligent', tools: 'TinyML, Edge Impulse, AI on microcontrollers', desc: 'Your projects don\'t just respond — they learn. Right on the microcontroller.', color: 'border-l-purple-500' },
          ].map((t) => (
            <div key={t.track} className={`bg-white rounded-xl p-6 border border-gray-100 border-l-4 ${t.color}`}>
              <h3 className="text-sm font-bold mb-2">{t.track}</h3>
              <p className="text-xs text-gray-500 mb-3">{t.desc}</p>
              <p className="font-mono text-xs text-gray-400">{t.tools}</p>
            </div>
          ))}
        </div>
        <div className="bg-teal-50 rounded-xl p-5 mt-5 border border-teal-100">
          <p className="text-sm text-teal-700">
            <strong>Required in all programs:</strong> IP &amp; Attribution Literacy module + AI as Engineering Tool module. Every student learns to document, credit, and protect original work.
          </p>
        </div>
      </section>

      {/* All Programs */}
      <section className="bg-white border-t border-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-eyebrow">All programs</div>
          <h2 className="section-title mb-10">Find your starting point</h2>
          <div className="space-y-6">
            {allPrograms.map((p) => (
              <div key={p.id} id={p.id} className={`rounded-2xl border border-gray-100 border-t-4 ${p.color} p-8 scroll-mt-24`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <span className="text-2xl">{p.emoji}</span> {p.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">{p.tag}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-lg font-bold text-brand">{p.price}</p>
                    <p className="text-xs text-gray-400">{p.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{p.desc}</p>
                <Link href="/contact" className="btn-primary no-underline text-sm">{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition System */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="section-eyebrow">Recognition system</div>
        <h2 className="text-2xl font-bold mb-8">The Maker Passport</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { level: 'Spark', desc: 'First workshop completed', color: 'bg-amber-50 text-amber-700' },
            { level: 'Builder', desc: 'MakerCore completed + GitHub portfolio', color: 'bg-teal-50 text-teal-700' },
            { level: 'Innovator', desc: 'Challenge or Bootcamp completed', color: 'bg-purple-50 text-purple-700' },
            { level: 'Fellow', desc: 'Fellowship completed + Demo Day', color: 'bg-pink-50 text-pink-700' },
          ].map((l) => (
            <div key={l.level} className={`${l.color} rounded-xl p-5 text-center`}>
              <h4 className="font-bold text-sm mb-1">{l.level}</h4>
              <p className="text-xs opacity-70">{l.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-6 leading-relaxed">
          At every level, students earn Credly digital badges — verifiable, shareable, and LinkedIn-ready. Combined with GitHub Pages portfolios, these credentials give students timestamped, public proof that their work is real and it&apos;s theirs.
        </p>
      </section>
    </>
  );
}
