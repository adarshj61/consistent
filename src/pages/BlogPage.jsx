import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  User,
  Tag,
  Sparkles,
  FileText,
  AlertCircle,
  X
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { blogArticles } from '../data/blogData';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All'];
    blogArticles.forEach(a => {
      if (a.category && !cats.includes(a.category)) {
        cats.push(a.category);
      }
    });
    return cats;
  }, []);

  const filteredArticles = useMemo(() => {
    return blogArticles.filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.author.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <SEOHead
        title="Blog & Learning Resources | The Consistent Academy Pune"
        description="Explore educational articles and study guides on English communication, IELTS test preparation, reading comprehension, vocabulary, and job interviews in Pune."
        canonical="https://www.theconsistentacademy.in/blog"
      />

      {/* Header Section */}
      <section className="bg-white dark:bg-slate-900 py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-brand-primary dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
            <Sparkles size={13} />
            <span>Academic Insights &amp; Guides</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight">
            Blog &amp; Learning Resources
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore practical educational articles about English communication, IELTS test preparation, reading comprehension, vocabulary building, and interview or group-discussion mastery.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, title, or keyword..."
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-purple-500 transition-colors shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
                  aria-label="Clear search query"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-brand-primary dark:bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Listing Grid */}
      <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Active Search & Filter Indicator */}
          {(searchQuery || selectedCategory !== 'All') && (
            <div className="mb-6 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <p>
                Showing <strong>{filteredArticles.length}</strong> {filteredArticles.length === 1 ? 'article' : 'articles'}
                {selectedCategory !== 'All' && <span> in <em>{selectedCategory}</em></span>}
                {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-brand-primary dark:text-purple-400 hover:underline font-semibold"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 max-w-lg mx-auto">
              <AlertCircle size={32} className="mx-auto text-slate-400" />
              <h3 className="font-heading font-bold text-lg text-slate-950 dark:text-white">
                No matching articles found
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                We couldn&apos;t find any articles matching your search criteria. Try a different search term or category filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-primary dark:bg-purple-600 text-white text-xs font-semibold shadow-sm"
              >
                <span>View All Articles</span>
              </button>
            </div>
          ) : (
            /* Article Cards Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Cover Image */}
                    {article.coverImage && (
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img
                          src={article.coverImage}
                          alt={article.coverAlt || article.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 dark:bg-slate-900/90 text-brand-primary dark:text-purple-300 backdrop-blur-sm shadow-sm border border-slate-200/60 dark:border-slate-700/60">
                            {article.category}
                          </span>
                          {article.isDraft && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-100/95 dark:bg-amber-950/90 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-800">
                              Draft Guide
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Card Body */}
                    <div className="p-5 sm:p-6 space-y-3">
                      {/* Meta: Date & Read Time */}
                      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                        {article.date ? (
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{article.date}</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <FileText size={12} />
                            <span>Study Resource</span>
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{article.readTime}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white leading-snug line-clamp-2 hover:text-brand-primary dark:hover:text-purple-400 transition-colors">
                        <Link to={`/blog/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Author */}
                      {article.author && (
                        <div className="pt-2 flex items-center gap-2 border-t border-slate-100 dark:border-slate-800/80">
                          <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 text-brand-primary dark:text-purple-300 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                            {article.author.charAt(0)}
                          </div>
                          <div className="truncate">
                            <span className="text-xs font-semibold text-slate-900 dark:text-white block truncate leading-tight">
                              {article.author}
                            </span>
                            {article.authorRole && (
                              <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                                {article.authorRole}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="p-5 sm:p-6 pt-0">
                    <Link
                      to={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors group"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Educational Assurance Footer Banner */}
          <div className="mt-12 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <BookOpen size={20} className="text-brand-primary dark:text-purple-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Academic Literature &amp; Methodology
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Articles are grounded in the verified books and teaching methodology developed by founder Vidya Wankhade at The Consistent Academy.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                to="/courses"
                className="bg-brand-primary dark:bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-brand-primary-hover transition-colors"
              >
                Explore Courses
              </Link>
              <Link
                to="/tests"
                className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-200 transition-colors"
              >
                Diagnostic Tests
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
