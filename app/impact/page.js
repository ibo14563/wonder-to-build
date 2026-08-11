import Counter from '../../components/Counter';
import Link from 'next/link';

export const metadata = { title: 'Impact — Wonder to Build' };

const stats = [
  { target: 20, label: 'Students reached' },
  { target: 1, label: 'School partnered' },
  { target: 3, label: 'Educators engaged' },
  { target: 14, label: 'Volunteers' },
  { target: 1, label: 'Country active' },
];

const tocStages = [
  { num: '01', title: 'Inputs', items: ['Volunteer educators and engineers', 'Arduino, ESP32, TinyML hardware', 'Curriculum and IP literacy modules', 'School partnerships in Kurdistan', 'Founding team resources'], color: 'border-t-amber-400 bg-amber-50' },
  { num: '02', title: 'Activities', items: ['Spark Workshops in schools', 'MakerCore online cohorts (upcoming)', 'Innovation Fellowship (upcoming)', 'Educator certification training (upcoming)', 'Monthly Maker Kit fulfillment (upcoming)'], color: 'border-t-teal-500 bg-teal-50' },
  { num: '03', title: 'Outputs', items: ['Students trained and enrolled', 'AUK certificates of participation', 'Arduino Starter Kits awarded', 'Teachers certified to teach', 'Original SDG-framed projects built'], color: 'border-t-purple-500 bg-purple-50' },
  { num: '04', title: 'Outcomes', items: ['Students distinguish creation from imitation', 'Verified technical skills and credentials', 'IP and attribution literacy adopted', 'Ethical AI use embedded in practice', 'Schools adopt maker education'], color: 'border-t-orange-400 bg-orange-50' },
  { num: '05', title: 'Long-term impact', items: ['Generation of genuine innovators in MENA', 'Innovation culture replaces copy culture', 'Students compete globally with proof of work', 'Educator multiplier scales to thousands', 'Open-source SDG solutions from underserved regions'], color: 'border-t-pink-500 bg-pink-50' },
];

const studentProjects = [
  { img: '/images/award-kit-boy.jpg', name: '1st Place — DBIS Quiz Winner', location: 'Duhok British International School', track: 'Spark Workshop · DBIS', desc: 'Top scorer in the post-workshop Arduino quiz. Received an Arduino Starter Kit as a prize on top of the certificate of participation that all workshop students received.' },
  { img: '/images/award-kit-girl.jpg', name: '2nd Place — DBIS Quiz Winner', location: 'Duhok British International School', track: 'Spark Workshop · DBIS', desc: 'Second-place finisher in the Arduino quiz. Received an Arduino Starter Kit as a prize on top of the certificate of participation that all workshop students received.' },
  { img: '/images/award-certificate.jpg', name: '3rd Place — DBIS Quiz Winner', location: 'Duhok British International School', track: 'Spark Workshop · DBIS', desc: 'Third-place finisher in the Arduino quiz. Received an Arduino Starter Kit as a prize on top of the certificate of participation that all workshop students received.' },
];

export default function Impact() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50 py-20 px-6">
        <div className="absolute inset-0 hero-dots opacity-[0.05]" />
        <div className="relative z-10 max-w-3xl mx-auto md:ml-[8%]">
          <div className="section-eyebrow">Impact</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
            We measure impact in things <span className="text-brand">students build</span>, not promises we make.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
            Every number on this page is a real student, a real workshop, a real photograph. We&apos;re at the beginning — and we&apos;d rather show you honest small numbers than inflated ones.
          </p>
        </div>
      </section>

      {/* Counters */}
      <div className="max-w-6xl mx-auto px-6 -mt-6 relative z-20">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-brand mb-4">Pilot workshop — DBIS, Duhok</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-white rounded-2xl shadow-sm border border-gray-100 divide-x divide-gray-100">
          {stats.map((s) => <Counter key={s.label} target={s.target} label={s.label} />)}
        </div>
      </div>

      {/* Honest Framing */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="section-eyebrow">Where we are</div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">A real pilot. A clear path forward.</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            In early 2024, Wonder to Build ran its first-ever Spark Workshop at the Duhok British International School. Around 20 students attended, 3 of their teachers engaged with the curriculum, and 14 volunteers helped run the day. Every student received an AUK certificate of participation. The top three scorers in the Arduino quiz each won an Arduino Starter Kit.
          </p>
          <p>
            That workshop is our proof of concept. It showed us the curriculum works, students respond to it, and schools want more of it. We&apos;re now preparing to expand across Kurdistan and the wider MENA region as our 501(c)(3) status is approved and our formal programs launch.
          </p>
          <p className="text-sm text-gray-500 italic">
            The counters above will grow. The photos on this page are real. That&apos;s the promise: everything we claim, we can prove.
          </p>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="section-eyebrow">Theory of change</div>
        <h2 className="section-title">From investment to lasting impact</h2>
        <p className="section-sub">Our model traces a clear line from resources invested to systemic change achieved.</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {tocStages.map((s) => (
            <div key={s.num} className={`rounded-xl border-t-4 ${s.color} p-5`}>
              <p className="font-mono text-xs font-bold text-gray-400 mb-1">{s.num}</p>
              <h3 className="text-sm font-bold mb-3">{s.title}</h3>
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="text-xs text-gray-500 leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="bg-white border-y border-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-eyebrow">SDG alignment</div>
          <h2 className="section-title">How we contribute to the global goals</h2>
          <p className="section-sub">Every program is designed to advance specific Sustainable Development Goals with measurable outcomes.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { num: '4', title: 'Quality education', desc: 'Every program delivers verifiable technical skills and industry-recognized Credly credentials that complement formal education systems. Students gain hands-on engineering competencies that traditional curricula often miss.', color: 'bg-red-50 border-t-red-700' },
              { num: '9', title: 'Industry, innovation & infrastructure', desc: 'Students design and build original hardware and software projects with real-world applications. Our curriculum moves beyond consumption of technology to creation of it.', color: 'bg-orange-50 border-t-orange-500' },
              { num: '10', title: 'Reduced inequalities', desc: 'Free Spark Workshops, simulation-first design with Tinkercad and Wokwi, and 50% scholarships on advanced programs ensure no student is locked out by cost or geography.', color: 'bg-pink-50 border-t-pink-600' },
              { num: '17', title: 'Partnerships for the goals', desc: 'Our model depends on cross-sector collaboration between schools, ministries of education, corporate sponsors, the Kurdish diaspora, and international development organizations.', color: 'bg-blue-50 border-t-blue-900' },
            ].map((sdg) => (
              <div key={sdg.num} className={`rounded-xl border-t-4 ${sdg.color} p-7`}>
                <p className="font-mono text-xs font-bold text-gray-400 mb-2">SDG {sdg.num}</p>
                <h3 className="text-lg font-bold mb-3">{sdg.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{sdg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="section-eyebrow">Student showcase</div>
        <h2 className="section-title">Workshop winners — Duhok British International School</h2>
        <p className="section-sub">All students received an AUK certificate of participation. The top three scorers in the Arduino quiz each won an Arduino Starter Kit to continue building at home.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {studentProjects.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:-translate-y-1 transition-all duration-300">
              <img src={p.img} alt={p.name} className="w-full h-52 object-cover" />
              <div className="p-6">
                <span className="text-xs font-mono text-brand">{p.track}</span>
                <h3 className="text-base font-bold mt-1 mb-1">{p.name}</h3>
                <p className="text-xs text-gray-400 mb-2">{p.location}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-brand rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 diagonal-pattern opacity-[0.04]" />
          <div className="relative z-10 max-w-md">
            <h2 className="text-2xl font-bold text-white mb-3">Impact report coming soon</h2>
            <p className="text-sm text-white/70 leading-relaxed">Once our 501(c)(3) is approved and our first formal programs launch, we&apos;ll publish a full impact report with student outcomes, financial transparency, and SDG contribution metrics.</p>
          </div>
          <div className="relative z-10 text-center">
            <Link href="/contact" className="inline-block bg-white text-brand font-bold px-8 py-4 rounded-xl text-sm hover:bg-gray-100 transition-colors no-underline">
              Get notified when it&apos;s ready
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
