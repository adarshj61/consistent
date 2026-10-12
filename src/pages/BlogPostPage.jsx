import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  BookOpen,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
  Share2,
  CheckCircle2
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { blogArticles } from '../data/blogData';

export default function BlogPostPage() {
  const { slug } = useParams();
  const article = blogArticles.find(a => a.slug === slug);

  // If article not found
  if (!article) {
    return (
      <div className="py-24 max-w-2xl mx-auto px-4 text-center space-y-4">
        <h1 className="font-heading font-bold text-3xl text-slate-950 dark:text-white">
          Article Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          The requested educational article could not be located or has been archived.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-brand-primary dark:bg-purple-600 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Return to Blog &amp; Learning Resources</span>
        </Link>
      </div>
    );
  }

  // Schema.org BlogPosting Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "The Consistent Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.theconsistentacademy.in/assets/logo2.png"
      }
    },
    "mainEntityOfPage": `https://www.theconsistentacademy.in/blog/${article.slug}`
  };

  return (
    <>
      <SEOHead
        title={`${article.title} | The Consistent Academy Blog`}
        description={article.excerpt}
        canonical={`https://www.theconsistentacademy.in/blog/${article.slug}`}
        schema={articleSchema}
      />

      {/* Breadcrumbs Navigation */}
      <div className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-3 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/blog" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-slate-900 dark:text-slate-200 font-medium truncate max-w-xs">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header & Main Container */}
      <article className="py-12 sm:py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Back Button */}
          <div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-purple-400 transition-colors group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to All Articles</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-brand-primary dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
                {article.category}
              </span>
              {article.isDraft && (
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-800">
                  Draft Curriculum Guide
                </span>
              )}
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Clock size={13} />
                <span>{article.readTime}</span>
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-950 dark:text-white leading-tight tracking-tight">
              {article.title}
            </h1>

            {/* Author Meta Strip */}
            <div className="pt-2 pb-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/60 text-brand-primary dark:text-purple-300 flex items-center justify-center font-bold text-sm">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <span className="font-semibold text-slate-950 dark:text-white block text-sm">
                    {article.author}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    {article.authorRole}
                  </span>
                </div>
              </div>

              {article.date && (
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Calendar size={14} />
                  <span>Published: {article.date}</span>
                </div>
              )}
            </div>

            {/* Verified Note Banner */}
            {article.verifiedNote && (
              <div className="p-3.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/60 text-xs text-purple-950 dark:text-purple-200 flex items-start gap-2.5">
                <ShieldCheck size={16} className="text-brand-primary dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">{article.verifiedNote}</p>
              </div>
            )}
          </header>

          {/* Featured Cover Image */}
          {article.coverImage && (
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm aspect-[16/9] bg-slate-100 dark:bg-slate-800">
              <img
                src={article.coverImage}
                alt={article.coverAlt || article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Excerpt / Lead */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
              &ldquo;{article.excerpt}&rdquo;
            </p>
          </div>

          {/* Article Structured Body Content */}
          <div className="space-y-8 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
            {article.sections && article.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-3">
                <h2 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-slate-950 dark:text-white pt-2">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Related Course & Diagnostic CTA Card */}
          {article.relatedCourse && (
            <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-purple-950/30 border border-purple-200 dark:border-purple-800/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-brand-primary dark:text-purple-400 uppercase tracking-wider block">
                  Recommended Course Alignment
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-950 dark:text-white">
                  {article.relatedCourse.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Turn these principles into sustained mastery with guided classroom mentorship and level evaluations at our Pune campus.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <Link
                  to={`/courses/${article.relatedCourse.slug}`}
                  className="bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 dark:hover:bg-purple-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Syllabus</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to="/tests"
                  className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  Diagnostic Test
                </Link>
              </div>
            </div>
          )}

          {/* Footer Navigation Back to Blog */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-primary dark:text-purple-400 hover:underline"
            >
              <ArrowLeft size={14} />
              <span>← Back to All Learning Resources</span>
            </Link>

            <Link
              to="/contact"
              className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
            >
              Have a question? Contact the Academy &rarr;
            </Link>
          </div>

        </div>
      </article>
    </>
  );
}
