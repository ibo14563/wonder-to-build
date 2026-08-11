import Link from 'next/link';

export const metadata = { title: 'Donate — Wonder to Build' };

export default function Donate() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50 py-20 px-6">
        <div className="absolute inset-0 hero-dots opacity-[0.05]" />
        <div className="relative z-10 max-w-3xl mx-auto md:ml-[8%]">
          <div className="section-eyebrow">Donate</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
            Give a student the tools to build <span className="text-brand">something the world has never seen.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
            Every donation will fund hardware, curriculum, credentials, and the confidence to create.
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border-2 border-brand p-8 md:p-10">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-teal-50 text-brand flex items-center justify-center flex-shrink-0 text-xl">
              ⏳
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Donations open once our 501(c)(3) is approved</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We&apos;re currently in the final stages of 501(c)(3) approval with the IRS. Once confirmed, all donations to Wonder to Build will be tax-deductible in the United States. We&apos;re committing to donors up-front: every dollar will be tracked transparently, and we&apos;ll never charge platform fees — we&apos;re partnering with Zeffy so 100% of your gift reaches students.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-5 mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary no-underline text-center flex-1">Be notified when donations open</Link>
            <Link href="/get-involved" className="btn-secondary no-underline text-center flex-1">Other ways to help now</Link>
          </div>
        </div>
      </section>

      {/* What Your Gift Will Cover */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">What your gift will cover</h2>
        <p className="text-sm text-gray-500 mb-8">A preview of the sponsorship tiers we&apos;ll offer at launch.</p>
        <div className="space-y-4">
          {[
            { amount: '$25/month', desc: 'Sponsors one student\'s full program access: curriculum, hardware, mentorship, Credly badge, and GitHub portfolio setup.' },
            { amount: '$199', desc: 'Certifies one educator who can reach 500+ students per year.' },
            { amount: '$299', desc: 'Funds a full MakerCore scholarship for one student.' },
            { amount: '$600', desc: 'Funds a Summer Bootcamp scholarship for one student.' },
            { amount: '$799', desc: 'Funds a full Innovation Fellowship scholarship for one student.' },
          ].map((g) => (
            <div key={g.amount} className="flex gap-5 items-start bg-white rounded-xl p-5 border border-gray-100">
              <span className="font-mono text-brand font-bold text-sm whitespace-nowrap min-w-[90px]">{g.amount}</span>
              <p className="text-sm text-gray-600 leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diaspora Message */}
      <section className="bg-white border-y border-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">A message to the Kurdish diaspora</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              If you grew up in Kurdistan and built your career abroad, you know what it&apos;s like to create opportunities where they didn&apos;t exist. You know the talent that fills every classroom back home. And you know that talent deserves more than tutorials and copied projects.
            </p>
            <p>
              When donations open, your support won&apos;t just fund a program — it will tell a student in Qalladizah, Sulaimani, or Erbil that someone who walked a similar path believes in what they can build. That signal matters more than you might think.
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Giving */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-4">Institutional &amp; foundation partners</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          If your foundation, corporate giving program, or grant committee is interested in early-stage nonprofit partnerships, we&apos;d welcome a conversation now — even before formal donations open. We can share our pilot data from the DBIS workshop, our theory of change, and our detailed program roadmap.
        </p>
        <Link href="/contact" className="btn-primary no-underline">Start a conversation</Link>
      </section>
    </>
  );
}
