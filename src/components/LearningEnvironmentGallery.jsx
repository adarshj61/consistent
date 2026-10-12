import React, { useState, useEffect, useRef, useMemo } from 'react';

export default function LearningEnvironmentGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);

  // Verified authentic photographs of The Consistent Academy learning environment
  const galleryItems = [
    {
      id: 'auditorium',
      src: '/assets/gallery/v16.jpeg',
      title: 'Auditorium Lecture & Academic Orientation',
      category: 'Lectures',
      badge: 'Campus Lecture',
      description: 'Orientation and motivational addresses conducted at the Pune center.',
      span: 'sm:col-span-2 lg:col-span-7 lg:row-span-2 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full min-h-[280px] lg:min-h-0',
      width: 4032,
      height: 3024
    },
    {
      id: 'workshop',
      src: '/assets/gallery/v1.png',
      title: 'Interactive Classroom Workshop',
      category: 'Workshops',
      badge: 'Guided Practice',
      description: 'Syntax clarification, grammar drills, and active classroom dialogue.',
      span: 'sm:col-span-1 lg:col-span-5 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10]',
      width: 800,
      height: 600
    },
    {
      id: 'group-discussion',
      src: '/assets/gallery/v9.jpeg',
      title: 'Group Discussion & Speech Drills',
      category: 'Collaborative',
      badge: 'Collaborative Drill',
      description: 'Peer debates applying the PEEL argument framework under faculty moderation.',
      span: 'sm:col-span-1 lg:col-span-5 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10]',
      width: 800,
      height: 600
    },
    {
      id: 'reading-circle',
      src: '/assets/gallery/v18.jpeg',
      title: 'Young Learners Reading Circle',
      category: 'Workshops',
      badge: 'Reading Circle',
      description: 'Weekly book reading circles cultivating daily vocabulary and comprehension habits.',
      span: 'sm:col-span-1 lg:col-span-6 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10]',
      width: 800,
      height: 600
    },
    {
      id: 'public-speaking',
      src: '/assets/gallery/v2.png',
      title: 'Public Speaking & Elocution Practice',
      category: 'Collaborative',
      badge: 'Podium Speaking',
      description: 'Podium speaking practice to eliminate hesitation and internal translation lag.',
      span: 'sm:col-span-1 lg:col-span-6 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10]',
      width: 800,
      height: 600
    }
  ];

  const categories = ['All', 'Workshops', 'Collaborative', 'Lectures'];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems;
    return galleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  // Viewport trigger for staggered cinematic animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
      aria-labelledby="learning-environment-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Perspective Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Learning Environment
            </span>
            <h2
              id="learning-environment-heading"
              className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white"
            >
              Campus Life &amp; Collaborative Sessions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Photographs from recent workshops, classroom drills, and reading club circles in Pune.
            </p>
          </div>

          {/* Perspective Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-teal-700 dark:bg-teal-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat === 'All' ? 'All Environments' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Staggered Cinematic Asymmetrical Composition */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {filteredItems.map((item, index) => {
            // Calculated sequential stagger delay
            const staggerDelayMs = isVisible ? index * 120 : 0;

            // Individual column layout depending on count
            let colSpanClass = item.span;
            if (filteredItems.length === 1) {
              colSpanClass = 'sm:col-span-2 lg:col-span-12 aspect-[21/9] sm:aspect-[16/8]';
            } else if (filteredItems.length === 2) {
              colSpanClass = 'sm:col-span-1 lg:col-span-6 aspect-[16/10]';
            }

            return (
              <figure
                key={item.id}
                style={{
                  transitionDelay: `${staggerDelayMs}ms`,
                }}
                className={`group relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-lg transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
                  isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-6 scale-[0.96]'
                } ${colSpanClass}`}
              >
                {/* Photograph */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
                  loading="lazy"
                  width={item.width}
                  height={item.height}
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent transition-opacity duration-300"
                  aria-hidden="true"
                />

                {/* Editorial Caption Bar */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end pointer-events-none z-10 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/20 dark:bg-white/15 backdrop-blur-md text-white border border-white/20">
                      {item.badge}
                    </span>
                  </div>

                  <figcaption className="font-heading font-bold text-sm sm:text-base text-white leading-snug drop-shadow-sm">
                    {item.title}
                  </figcaption>

                  <p className="text-[11px] text-slate-200/90 leading-relaxed line-clamp-1 group-hover:line-clamp-2 transition-all duration-200">
                    {item.description}
                  </p>
                </div>
              </figure>
            );
          })}
        </div>

      </div>
    </section>
  );
}
