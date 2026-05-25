'use client';

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50 py-20 px-6">
        <div className="absolute inset-0 hero-dots opacity-[0.05]" />
        <div className="relative z-10 max-w-3xl mx-auto md:ml-[8%]">
          <div className="section-eyebrow">Contact</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
            Let&apos;s build something <span className="text-brand">together.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
            Whether you&apos;re a student, educator, donor, or potential partner — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold mb-6">Send us a message</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Your name</label>
                <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors" placeholder="Ibrahim Ahmed" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
                <input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">I am a...</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors bg-white">
                  <option>Student</option>
                  <option>Educator</option>
                  <option>School administrator</option>
                  <option>Donor or sponsor</option>
                  <option>Press or media</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <textarea rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none" placeholder="Tell us how we can help..." />
              </div>
              <button type="button" className="btn-primary">Send message</button>
              <p className="text-xs text-gray-400">Form integration coming soon. For now, email us directly.</p>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-sm font-bold mb-3">Specific inquiries</h3>
              <div className="space-y-3 text-sm text-gray-500">
                <p><strong className="text-gray-700">Students:</strong> Questions about programs, applications, or kits.</p>
                <p><strong className="text-gray-700">Educators:</strong> Certification or bringing a workshop to your school.</p>
                <p><strong className="text-gray-700">Donors &amp; sponsors:</strong> Institutional giving or corporate sponsorship.</p>
                <p><strong className="text-gray-700">Press:</strong> Interview requests and feature stories welcome.</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-3">Find us online</h3>
              <div className="space-y-2 text-sm">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-brand transition-colors no-underline">
                  📺 Future Frontiers on YouTube
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-brand transition-colors no-underline">
                  💼 Wonder to Build on LinkedIn
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-brand transition-colors no-underline">
                  📷 @wondertobuild on Instagram
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="text-sm font-bold mb-2">Where we are</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Wonder to Build is a 501(c)(3) nonprofit incorporated in the United States, with operations in the Kurdistan Region of Iraq. Our programs are delivered online and in person.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
