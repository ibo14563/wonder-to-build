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
            Every donation funds hardware, curriculum, credentials, and the confidence to create.
          </p>
        </div>
      </section>

      {/* What Your Gift Covers */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">What your gift covers</h2>
        <div className="space-y-4">
          {[
            { amount: '$25/month', desc: 'Sponsors one student\'s full program access: curriculum, hardware, mentorship, Credly badge, and GitHub portfolio setup.' },
            { amount: '$199', desc: 'Certifies one educator who will reach 500+ students per year.' },
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
        <p className="text-sm text-gray-500 mt-6 leading-relaxed">
          Every amount matters. Even a small one-time gift helps us ship kits, produce content, or bring a Spark Workshop to a school that couldn&apos;t otherwise access one.
        </p>
      </section>

      {/* Donation Form Placeholder */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-teal-50 rounded-2xl p-10 text-center border-2 border-dashed border-teal-200">
          <h3 className="text-lg font-bold text-teal-800 mb-3">Donation form coming soon</h3>
          <p className="text-sm text-teal-600 mb-4">
            We&apos;re setting up our Zeffy donation platform — 100% free, zero platform fees, so every dollar goes directly to students.
          </p>
          <p className="text-xs text-teal-400 font-mono">
            {/* INTEGRATION NOTE: Replace this section with Zeffy iframe embed */}
            Zeffy embed will go here
          </p>
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
              Your support doesn&apos;t just fund a program — it tells a student in Qalladizah, Sulaimani, or Erbil that someone who walked a similar path believes in what they can build. That signal matters more than you might think.
            </p>
          </div>
        </div>
      </section>

      {/* Tax Info */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-4">Institutional &amp; foundation giving</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Wonder to Build welcomes support from foundations, institutional donors, corporate matching programs, and government grants. We provide full impact reports, financial transparency, and verifiable outcome data for every program we run.
        </p>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500">
            <strong>Tax deductibility:</strong> Wonder to Build is a 501(c)(3) nonprofit organization incorporated in the United States. All donations are tax-deductible to the extent allowed by law. You will receive a receipt for every gift.
          </p>
        </div>
      </section>
    </>
  );
}
