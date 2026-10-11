import React from 'react';
import {
  BookOpen,
  MessageCircle,
  Users,
  Sparkles,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ArrowRight,
  HeartHandshake
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function ClubPage({ onOpenEnquiry }) {
  const clubFeatures = [
    {
      title: "Weekly Reading Circles",
      description: "Curated chapters from classic literature and modern non-fiction. Analyze character arcs, moral dilemmas, and contextual vocabulary."
    },
    {
      title: "Speaking & Speech Hours",
      description: "Safe, supportive impromptu speaking sessions where shyness is overcome and stage presence is developed week after week."
    },
    {
      title: "Vocabulary In Action",
      description: "Learn 10 high-utility idioms, phrases, and collocations each week, applying them immediately in conversational games."
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
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-surface-subtle py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-100/80 px-3 py-1 rounded-md">
            Learning Community
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            The Consistency Club
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A vibrant reading circle, speaking community, and daily habit-building ecosystem for curious minds of all ages.
          </p>
        </div>
      </section>

      {/* Main Club Details */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
                Community Spirit
              </span>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                "Fluency Isn't Built in a Single Marathon; It is Built in Daily 20-Minute Habits."
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The Consistency Club was launched by Vidya Wankhade to give learners an inspiring space where reading, articulation, and vocabulary expansion become natural daily pleasures rather than stressful academic chores.
              </p>

              <div className="space-y-3 pt-1">
                {clubFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 size={17} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-bold text-sm text-slate-900">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
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
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-soft-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>Join WhatsApp Community (Free)</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Consistency Reading Club')}
                  className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-soft-sm transition-colors"
                >
                  Enroll in Reading Club (₹500/mo)
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 rounded-3xl p-4 border border-slate-200 shadow-soft-md space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src="/assets/gallery/v4.png"
                    alt="Young Learners Reading Club at The Consistent Academy"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="600"
                    height="450"
                  />
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Monthly Membership:</span>
                    <span className="block font-heading font-extrabold text-2xl text-slate-900">
                      ₹500 <span className="text-xs font-normal text-slate-500">/ per month</span>
                    </span>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
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
