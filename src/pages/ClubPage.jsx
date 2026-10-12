import React from 'react';
import {
  BookOpen,
  MessageCircle,
  Users,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function ClubPage({ onOpenEnquiry }) {
  const clubFeatures = [
    {
      title: "Weekly Reading Circles",
      description: "Curated chapters from classic literature and modern non-fiction. Analyze thematic depth, rhetorical structure, and contextual vocabulary."
    },
    {
      title: "Speaking & Speech Hours",
      description: "Safe, supportive impromptu speaking sessions where hesitation is systematically broken down through weekly practice."
    },
    {
      title: "Vocabulary In Action",
      description: "Learn high-utility idiomatic expressions and formal collocations each week, applying them immediately in guided conversation."
    },
    {
      title: "WhatsApp Community Access",
      description: "Daily reading prompts, peer accountability, and direct interactions with Vidya Wankhade and the mentorship team."
    }
  ];

  return (
    <>
      <SEOHead
        title="Consistency Reading & Speaking Club | The Consistent Academy"
        description="Join The Consistent Academy's Consistency Club: weekly reading circles, spoken English practice, and an active WhatsApp learning community in Pune."
        canonical="https://www.theconsistentacademy.in/club"
      />

      {/* Header */}
      <section className="bg-white dark:bg-slate-900 py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
            Community &amp; Lifelong Learning
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight">
            The Consistency Club
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A weekly reading circle, conversational laboratory, and habit-building ecosystem for students, professionals, and book lovers.
          </p>
        </div>
      </section>

      {/* Main Club Details */}
      <section className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Community Spirit
              </span>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-950 dark:text-white leading-tight">
                "Fluency Is Not Formed in a Single Sprint; It Is Built Through Daily Deliberate Exposure."
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                The Consistency Club was created by Vidya Wankhade to give learners an open, regular platform where reading, articulation, and vocabulary expansion become sustained habits rather than high-pressure academic chores.
              </p>

              <div className="space-y-3 pt-1">
                {clubFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <CheckCircle2 size={16} className="text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-bold text-sm text-slate-950 dark:text-white">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing & Join Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://chat.whatsapp.com/Kw2YbntkWMqG66MVI9xSJq?mode=ac_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>Join WhatsApp Community (Free)</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Consistency Reading Club')}
                  className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  Enroll in Reading Club (₹500/mo)
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-slate-800">
                  <img
                    src="/assets/gallery/v4.png"
                    alt="Young Learners Reading Club at The Consistent Academy"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="600"
                    height="450"
                  />
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Monthly Membership:</span>
                    <span className="block font-heading font-extrabold text-2xl text-slate-950 dark:text-white">
                      ₹500 <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/ per month</span>
                    </span>
                  </div>
                  <span className="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold px-3 py-1 rounded border border-emerald-200 dark:border-emerald-800">
                    Online &amp; Weekend Circles
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
