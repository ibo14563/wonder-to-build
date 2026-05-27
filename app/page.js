import Link from 'next/link';
import Counter from '../components/Counter';

const programs = [
  { name: 'Spark Workshop', price: 'Free · 1 day', desc: 'A free, one-day, in-school introduction to circuits and code using Tinkercad simulation. Your first Maker Passport stamp. Ages 12+.', icon: '⚡', color: 'bg-amber-50 text-amber-600' },
  { name: 'MakerCore Course', price: '$299 · 3 months', desc: 'Structured online learning through Tracks 1 & 2. Live sessions, guided projects, Credly badge and GitHub portfolio required.', icon: '🔧', color: 'bg-teal-50 text-teal-600' },
  { name: 'Innovation Fellowship', price: '$799 · 6 months', desc: 'Our most advanced cohort. TinyML with Edge Impulse, SDG-framed capstone project, and a Demo Day presentation.', icon: '🧠', color: 'bg-purple-50 text-purple-600' },
];

const stats = [
  { target: 247, label: 'Students reached' },
  { target: 12, label: 'Schools partnered' },
  { target: 18, label: 'Educators certified' },
  { target: 186, label: 'Badges issued' },
  { target: 134, label: 'GitHub projects' },
  { target: 4, label: 'Countries active' },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-teal-50 to-emerald-50 px-6">
        <div className="absolute inset-0 hero-dots opacity-[0.06]" />
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <span className="inline-block bg-brand text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              501(c)(3) nonprofit
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
              Don&apos;t just learn technology.{' '}
              <span className="text-brand">Build something the world has never seen.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl mb-8">
              Hands-on engineering programs that teach students to create genuine innovations — not copy existing ones. From Kurdistan to the world.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/programs" className="btn-primary no-underline">Apply to a program</Link>
              <Link href="/donate" className="btn-secondary no-underline">Sponsor a student — $25/mo</Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/hero-teaching.jpg"
              alt="Ibrahim teaching students about robotics in a Kurdistan classroom"
              className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-md px-4 py-3 border border-gray-100">
              <p className="text-xs font-bold text-brand">Live from Kurdistan</p>
              <p className="text-xs text-gray-400">Workshop in progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT COUNTER BAR ── */}
      <section className="max-w-6xl mx-auto px-6 mt-8 mb-4 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white rounded-2xl shadow-sm border border-gray-100 divide-x divide-gray-100">
          {stats.map((s) => (
            <Counter key={s.label} target={s.target} label={s.label} />
          ))}
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="section-eyebrow">The challenge</div>
        <h2 className="section-title">The problem we solve</h2>
        <p className="section-sub">In many communities, copying is celebrated as creation. We&apos;re changing that.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-sm text-gray-500 leading-relaxed">
              In many regions, digital literacy gaps allow copied work to pass as innovation. Media and communities celebrate reproduced ideas as breakthroughs. A student who resets a Facebook password gets called a &ldquo;hacker.&rdquo; Someone who reproduces an Arduino tutorial gets called an inventor. The gap between imitation and genuine creation is enormous — and it&apos;s growing wider as AI tools make it easier than ever to generate projects you don&apos;t understand.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Wonder to Build addresses the root cause. We don&apos;t just teach students to code or wire circuits — we teach them what it means to truly create. We give them the tools, the ethics, the documentation habits, and the philosophical framework to build something genuinely original and prove it&apos;s theirs.
            </p>
          </div>
          <div className="bg-teal-50 rounded-2xl p-8 border-l-4 border-brand flex flex-col justify-center">
            <p className="text-xl font-bold text-teal-800 leading-snug mb-3">
              &ldquo;Someone who can reset a Facebook password is a &lsquo;hacker.&rsquo;&rdquo;
            </p>
            <span className="text-sm text-brand font-medium">The joke is real. The gap is serious. We fix the root cause.</span>
          </div>
        </div>
      </section>

      {/* ── PHOTO BAND ── */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/students-robot.jpg" alt="Students crowded around Ibrahim as he demonstrates a robot" className="rounded-2xl object-cover h-48 w-full" />
          <img src="/images/founder-lab.jpg" alt="Ibrahim working on electronics in his lab" className="rounded-2xl object-cover h-48 w-full" />
          <img src="/images/students-workshop.jpg" alt="Students engaged in a workshop discussion with robotics equipment" className="rounded-2xl object-cover h-48 w-full hidden md:block" />
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="bg-teal-50/50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-eyebrow">Programs</div>
          <h2 className="section-title">Find your starting point</h2>
          <p className="section-sub">Every program starts with free simulation — no hardware required.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {programs.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-brand hover:-translate-y-1 transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center text-2xl mb-5`}>
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <p className="font-mono text-xs text-brand mb-3">{p.price}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{p.desc}</p>
                <Link href="/programs" className="text-sm font-bold text-brand no-underline group-hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/programs" className="btn-secondary no-underline">View all 8 programs</Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="section-eyebrow">The journey</div>
        <h2 className="section-title">How it works</h2>
        <p className="section-sub">Three stages. One principle: start by learning, progress to building, finish by proving your work is original.</p>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[17%] right-[17%] h-0.5 bg-teal-200" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #9FE1CB 0, #9FE1CB 10px, transparent 10px, transparent 18px)' }} />
          {[
            { step: '1', title: 'Spark', desc: 'Attend a free workshop. Build your first circuit in simulation. Get your Maker Passport.', emoji: '⚡', bg: 'bg-amber-50 text-amber-600' },
            { step: '2', title: 'Build', desc: 'Enroll in MakerCore or the Fellowship. Create real projects. Document everything.', emoji: '🔧', bg: 'bg-teal-50 text-teal-600' },
            { step: '3', title: 'Prove', desc: 'Earn Credly badges. Publish your GitHub portfolio. Show the world it\'s yours.', emoji: '🏆', bg: 'bg-purple-50 text-purple-600' },
          ].map((s) => (
            <div key={s.step} className="text-center relative z-10">
              <div className={`w-16 h-16 rounded-full ${s.bg} flex items-center justify-center text-3xl mx-auto mb-4`}>
                {s.emoji}
              </div>
              <h3 className="text-lg font-bold mb-2">{s.step}. {s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="section-eyebrow">Voices</div>
        <h2 className="section-title">From the workshop</h2>
        <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center mt-8">
          <img
            src="/images/students-robot.jpg"
            alt="Students engaged with robotics project"
            className="w-24 h-24 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed italic mb-4">
              &ldquo;Before Wonder to Build, I thought engineering was something that happened in other countries. Now I have a portfolio of projects I designed myself, and I can explain every line of code and every wire. That&apos;s the difference — I didn&apos;t just build it. I understand it.&rdquo;
            </blockquote>
            <cite className="text-sm font-bold text-brand not-italic">
              Student, Kurdistan Region — Spark Workshop → MakerCore graduate
            </cite>
          </div>
        </div>
      </section>

      {/* ── THEORY OF CHANGE ── */}
      <section className="bg-white border-t border-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-eyebrow">Theory of change</div>
          <h2 className="section-title">From curiosity to verified creation</h2>
          <p className="section-sub">Five stages that turn a curious student into a documented, credentialed innovator.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { num: '01', title: 'Access', desc: 'Free simulation tools remove barriers', color: 'border-t-amber-400 bg-amber-50' },
              { num: '02', title: 'Literacy', desc: 'IP, attribution & AI ethics training', color: 'border-t-teal-500 bg-teal-50' },
              { num: '03', title: 'Practice', desc: 'Guided then independent project builds', color: 'border-t-purple-500 bg-purple-50' },
              { num: '04', title: 'Proof', desc: 'GitHub portfolios & Credly credentials', color: 'border-t-orange-400 bg-orange-50' },
              { num: '05', title: 'Impact', desc: 'Original SDG innovations, verified & shared', color: 'border-t-pink-500 bg-pink-50' },
            ].map((s) => (
              <div key={s.num} className={`rounded-xl border-t-4 ${s.color} p-5`}>
                <p className="font-mono text-xs font-bold text-gray-400 mb-2">{s.num}</p>
                <h4 className="text-sm font-bold mb-1">{s.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SDG BADGES ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="section-eyebrow justify-center">Global goals</div>
        <h2 className="text-2xl font-bold mb-8">Aligned with the UN Sustainable Development Goals</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { num: '4', label: 'Quality education', color: 'bg-red-700' },
            { num: '9', label: 'Industry & innovation', color: 'bg-orange-500' },
            { num: '10', label: 'Reduced inequalities', color: 'bg-pink-600' },
            { num: '17', label: 'Partnerships', color: 'bg-blue-900' },
          ].map((sdg) => (
            <span key={sdg.num} className={`${sdg.color} text-white text-sm font-bold px-5 py-2.5 rounded-full`}>
              SDG {sdg.num} — {sdg.label}
            </span>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-brand rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 diagonal-pattern opacity-[0.04]" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Stay connected with Wonder to Build</h2>
            <p className="text-sm text-white/70 mb-8">One email per month. Program updates, student stories, and new tutorials. No spam.</p>
            <div className="max-w-md mx-auto flex gap-2">
              <input type="email" placeholder="Your email address" className="flex-1 px-5 py-3 rounded-full border-2 border-white/30 bg-white/10 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white" />
              <button className="bg-white text-brand px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-white/40 mt-4">Mailchimp integration coming soon</p>
          </div>
        </div>
      </section>
    </>
  );
}
