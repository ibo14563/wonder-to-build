import Link from 'next/link';
import { getPostBySlug, getAllSlugs } from '../../../lib/blog';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: `${post.title} — Wonder to Build Blog` };
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-sm text-brand font-medium no-underline hover:underline mb-8 inline-block">
        ← Back to blog
      </Link>

      <div className="flex items-center gap-3 mb-4">
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

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
        {post.title}
      </h1>

      {post.author && (
        <p className="text-sm text-gray-400 mb-10">By {post.author}</p>
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
