import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';

export const metadata = { title: 'Blog — Wonder to Build' };

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50 py-20 px-6">
        <div className="absolute inset-0 hero-dots opacity-[0.05]" />
        <div className="relative z-10 max-w-3xl mx-auto md:ml-[8%]">
          <div className="section-eyebrow">Blog</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
            Stories from the workshop, the classroom, and the <span className="text-brand">world of making.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
            Updates, tutorials, student profiles, and reflections from the Wonder to Build community.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">📝</p>
            <h2 className="text-xl font-bold mb-2">Coming soon</h2>
            <p className="text-gray-500">We&apos;re working on our first posts. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-brand/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  {post.category && (
                    <span className="text-xs font-bold text-brand bg-teal-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  )}
                  {post.date && (
                    <span className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  )}
                </div>
                <Link href={`/blog/${post.slug}`} className="no-underline">
                  <h2 className="text-xl font-bold text-gray-900 hover:text-brand transition-colors mb-2">
                    {post.title}
                  </h2>
                </Link>
                {post.excerpt && (
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                )}
                {post.author && (
                  <p className="text-xs text-gray-400">By {post.author}</p>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
