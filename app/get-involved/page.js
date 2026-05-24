import Link from 'next/link';

export const metadata = { title: 'Get Involved — Wonder to Build' };

export default function GetInvolved() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50 py-20 px-6">
        <div className="absolute inset-0 hero-dots opacity-[0.05]" />
        <div className="relative z-10 max-w-3xl mx-auto md:ml-[8%]">
          <div className="section-eyebrow">Get involved</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
            There&apos;s a role for everyone in building the <span className="text-brand">next generation of creators.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
            Whether you&apos;re a student, teacher, school, donor, or company — here&apos;s how to get started.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* For Students */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">⚡ For students</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You&apos;re the reason Wonder to Build exists. Apply to any of our programs — every one begins with free simulation tools, so you don&apos;t need to buy anything to get started. Watch Future Frontiers on YouTube for free tutorials in Kurdish and English. Enter the Annual Innovation Challenge when it opens. Subscribe to a Monthly Maker Kit to build at your own pace.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wherever you start, you&apos;ll earn Credly badges and build a GitHub portfolio that proves what you can do. That portfolio follows you to university applications, job interviews, and beyond.
          </p>
          <Link href="/programs" className="btn-primary no-underline">Apply to a program</Link>
        </div>

        {/* For Educators */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🎓 For educators</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You have the power to reach hundreds of students every year. Get certified to teach Wonder to Build curriculum in your own classroom. You&apos;ll receive full lesson plans, project guides, assessment rubrics, and access to our educator community. Or invite us in: request a free Spark Workshop at your school and watch your students light up.
          </p>
          <Link href="/contact" className="btn-primary no-underline">Get certified — $199</Link>
        </div>

        {/* For Schools */}
        <div id="partner">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🏫 For schools &amp; ministries of education</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Wonder to Build is designed to complement existing curricula, not replace them. We partner with schools and education ministries to integrate hands-on engineering, IP literacy, and AI ethics into your programs. We offer free Spark Workshops delivered on-site, Educator Certification for your teachers, curriculum integration support, and student credential tracking through Credly and GitHub.
          </p>
          <Link href="/contact" className="btn-primary no-underline">Partner with us</Link>
        </div>

        {/* For Donors */}
        <div id="sponsor">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">💚 For individual donors</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your support puts tools in students&apos; hands. A $25 monthly sponsorship covers hardware, curriculum access, and a verifiable digital credential for one student. A one-time gift of any size helps fund scholarships, workshops, and content production. Every dollar is accounted for transparently on our Impact page.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you&apos;re part of the Kurdish diaspora in the US or Europe, your contribution carries a special significance: you&apos;re investing directly in the next generation of creators from your own community.
          </p>
          <Link href="/donate" className="btn-primary no-underline">Donate to Wonder to Build</Link>
        </div>

        {/* For Corporate Sponsors */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🏢 For corporate sponsors</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We partner with companies that share our commitment to education, innovation, and access. Sponsorship opportunities include underwriting Maker Kits and student hardware, sponsoring the Annual Innovation Challenge, funding scholarships, and brand visibility across our programs, events, and YouTube content.
          </p>
          <Link href="/contact" className="btn-primary no-underline">Become a sponsor</Link>
        </div>

        {/* Volunteer & Mentor */}
        <div id="mentor">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🤝 Volunteer &amp; mentor</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&apos;re an engineer, designer, educator, or professional who wants to share your experience, we&apos;re building a mentor network to support our students. Mentors provide guidance during the Innovation Fellowship, review projects for the Annual Challenge, and contribute to curriculum development.
          </p>
          <Link href="/contact" className="btn-primary no-underline">Join as a mentor</Link>
        </div>
      </section>
    </>
  );
}
