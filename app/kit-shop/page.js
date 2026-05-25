export const metadata = { title: 'Kit Shop — Wonder to Build' };

const kits = [
  { tier: 'Starter', price: '$19', desc: 'Perfect for beginners aged 12 and up. Basic electronic components — LEDs, resistors, buttons, sensors — along with a guided project that introduces core concepts. No prior experience needed.', color: 'border-amber-400', badge: 'bg-amber-50 text-amber-700' },
  { tier: 'Builder', price: '$35', desc: 'For students who\'ve completed a few projects and want to go further. Intermediate components: more complex sensors, actuators, and the components needed to build connected projects.', color: 'border-teal-500', badge: 'bg-teal-50 text-teal-700', popular: true },
  { tier: 'Advanced', price: '$55', desc: 'For experienced students ready to tackle IoT and edge computing. ESP32 modules, specialized sensors, and components for connected and intelligent projects aligned with Tracks 2 and 3.', color: 'border-purple-500', badge: 'bg-purple-50 text-purple-700' },
];

export default function KitShop() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50 py-20 px-6">
        <div className="absolute inset-0 hero-dots opacity-[0.05]" />
        <div className="relative z-10 max-w-3xl mx-auto md:ml-[8%]">
          <div className="section-eyebrow">Kit shop</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
            A box of components. A project guide. A challenge. <span className="text-brand">Every month.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
            Build at your own pace with curated kits shipped to your door, wherever you are in the world.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">How it works</h2>
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { step: '1', title: 'Choose your tier', desc: 'Pick Starter, Builder, or Advanced based on your experience level.' },
            { step: '2', title: 'Receive your kit', desc: 'We ship your first kit within a week. New kits arrive monthly.' },
            { step: '3', title: 'Build & document', desc: 'Follow the guide, complete the challenge, document your work.' },
            { step: '4', title: 'Add to portfolio', desc: 'Everything you build goes into your GitHub portfolio.' },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-brand font-mono font-bold text-sm flex items-center justify-center mx-auto mb-3">{s.step}</div>
              <h3 className="text-sm font-bold mb-1">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white border-y border-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {kits.map((k) => (
              <div key={k.tier} className={`rounded-2xl border-2 ${k.popular ? 'border-brand' : 'border-gray-100'} p-7 relative`}>
                {k.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${k.badge} mb-4`}>{k.tier}</span>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-mono text-3xl font-bold text-gray-900">{k.price}</span>
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{k.desc}</p>
                {/* INTEGRATION NOTE: Replace href with Stripe Payment Link */}
                <button className="w-full btn-primary text-center" disabled>
                  Coming soon
                </button>
                <p className="text-xs text-gray-400 text-center mt-3">Stripe checkout coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift a Kit */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-teal-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-4xl">🎁</div>
          <div>
            <h3 className="text-lg font-bold mb-2">Gift a kit</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Know a young person who&apos;d love this? You can purchase a Maker Kit subscription as a gift. We&apos;ll include a welcome card with the recipient&apos;s name and a guide to getting started. It&apos;s a gift that turns into a portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            { q: 'Where do you ship?', a: 'We ship globally. Delivery times vary by region, but most orders arrive within 7–14 business days.' },
            { q: 'Can I cancel anytime?', a: 'Yes. Cancel or change tiers at any time. No penalties, no questions.' },
            { q: 'What\'s in each box?', a: 'Components, a printed project guide, documentation templates, and a monthly challenge card. Everything you need except a computer.' },
            { q: 'Do I need prior experience?', a: 'Not for Starter. Builder and Advanced assume some familiarity with basic circuits.' },
            { q: 'Can schools order in bulk?', a: 'Yes. Contact us for institutional pricing and classroom bundles.' },
          ].map((f) => (
            <div key={f.q}>
              <h3 className="text-sm font-bold mb-1">{f.q}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
