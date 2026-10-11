import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Award,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Compass
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { englishDiagnosticTest, leadershipAssessmentTest } from '../data/testsData';

export default function TestsPage({ onOpenEnquiry }) {
  const [activeTest, setActiveTest] = useState('english'); // 'english' or 'leadership'

  // English Diagnostic State
  const [englishAnswers, setEnglishAnswers] = useState({});
  const [englishSubmitted, setEnglishSubmitted] = useState(false);

  // Leadership Assessment State
  const [leadershipAnswers, setLeadershipAnswers] = useState({});
  const [leadershipSubmitted, setLeadershipSubmitted] = useState(false);

  // Handle English option select
  const handleEnglishSelect = (qId, optionIdx) => {
    if (englishSubmitted) return;
    setEnglishAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  // Calculate English Score
  const calculateEnglishScore = () => {
    let score = 0;
    englishDiagnosticTest.questions.forEach(q => {
      if (englishAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  // Reset English Test
  const resetEnglishTest = () => {
    setEnglishAnswers({});
    setEnglishSubmitted(false);
  };

  // Handle Leadership select
  const handleLeadershipSelect = (qId, style) => {
    if (leadershipSubmitted) return;
    setLeadershipAnswers(prev => ({ ...prev, [qId]: style }));
  };

  // Calculate Dominant Leadership Style
  const getDominantLeadershipStyle = () => {
    const counts = {};
    Object.values(leadershipAnswers).forEach(style => {
      counts[style] = (counts[style] || 0) + 1;
    });
    let maxStyle = 'Strategic / Decisive';
    let maxCount = 0;
    for (const [style, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        maxStyle = style;
      }
    }
    return maxStyle;
  };

  return (
    <>
      <SEOHead
        title="Diagnostic Proficiency Tests & Assessments | The Consistent Academy"
        description="Take our free 10-question English diagnostic test and leadership communication style assessment. Receive instant feedback and tailored course guidance."
        canonical="https://www.theconsistentacademy.in/tests"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-surface-subtle py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-100/80 px-3 py-1 rounded-md">
            Self-Assessment Tools
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            Diagnostic Tests &amp; Assessments
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Evaluate your baseline English grammar skills or uncover your executive communication style with our free interactive assessments.
          </p>

          {/* Test Selector Tabs */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTest('english')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTest === 'english'
                  ? 'bg-brand-primary text-white shadow-soft-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              English Diagnostic (10 Questions)
            </button>
            <button
              type="button"
              onClick={() => setActiveTest('leadership')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTest === 'leadership'
                  ? 'bg-brand-primary text-white shadow-soft-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Leadership Communication Style
            </button>
          </div>
        </div>
      </section>

      {/* Test Container */}
      <section className="py-16 bg-surface-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* TAB 1: English Diagnostic Test */}
          {activeTest === 'english' && (
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm">
                <h2 className="font-heading font-bold text-xl text-slate-900">
                  {englishDiagnosticTest.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {englishDiagnosticTest.description}
                </p>
              </div>

              {/* Score Display If Submitted */}
              {englishSubmitted && (
                <div className="p-6 rounded-2xl bg-white border-2 border-brand-primary shadow-soft-md text-center space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                    Assessment Result
                  </span>
                  <div className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900">
                    {calculateEnglishScore()} / {englishDiagnosticTest.questions.length}
                  </div>
                  <p className="text-sm text-slate-700 max-w-lg mx-auto">
                    {calculateEnglishScore() >= 8 ? (
                      <span>
                        <strong>Strong Baseline!</strong> You have solid grammatical intuition. We recommend our <strong>IELTS Prep</strong> or <strong>Advanced Leadership Presence</strong> courses to take your speaking and analytical articulation to mastery.
                      </span>
                    ) : calculateEnglishScore() >= 5 ? (
                      <span>
                        <strong>Good Foundation!</strong> You grasp key principles but need polish in formal grammatical modifiers and prepositions. Our <strong>Communication Skill Training</strong> or <strong>Targeted IELTS Modules</strong> are ideal for you.
                      </span>
                    ) : (
                      <span>
                        <strong>Foundational Needs Identified:</strong> You will benefit greatly from our structured <strong>Grammar &amp; Communication Fundamentals</strong> before tackling formal test preparation.
                      </span>
                    )}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry && onOpenEnquiry('Diagnostic Follow-up')}
                      className="bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm"
                    >
                      Book 1-on-1 Counseling
                    </button>
                    <button
                      type="button"
                      onClick={resetEnglishTest}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-lg border border-slate-200 inline-flex items-center gap-1.5"
                    >
                      <RotateCcw size={13} />
                      <span>Retake Test</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Questions List */}
              <div className="space-y-6">
                {englishDiagnosticTest.questions.map((q, idx) => {
                  const selectedIdx = englishAnswers[q.id];
                  const isCorrect = selectedIdx === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-md bg-brand-50 text-brand-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <h3 className="font-heading font-semibold text-base text-slate-900 leading-snug">
                          {q.question}
                        </h3>
                      </div>

                      {/* Options */}
                      <div className="space-y-2 pt-1 pl-9">
                        {q.options.map((opt, oIdx) => {
                          const isOptionSelected = selectedIdx === oIdx;
                          let optionStyle = "border-slate-200 hover:bg-slate-50 text-slate-700";

                          if (englishSubmitted) {
                            if (oIdx === q.correctAnswer) {
                              optionStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-medium";
                            } else if (isOptionSelected && !isCorrect) {
                              optionStyle = "bg-rose-50 border-rose-300 text-rose-900";
                            } else {
                              optionStyle = "border-slate-200 text-slate-400 opacity-60";
                            }
                          } else if (isOptionSelected) {
                            optionStyle = "bg-brand-50 border-brand-purple text-brand-primary font-semibold ring-1 ring-brand-purple";
                          }

                          return (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => handleEnglishSelect(q.id, oIdx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                            >
                              <span>{opt}</span>
                              {englishSubmitted && oIdx === q.correctAnswer && (
                                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                              )}
                              {englishSubmitted && isOptionSelected && !isCorrect && (
                                <AlertCircle size={16} className="text-rose-500 flex-shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation if submitted */}
                      {englishSubmitted && (
                        <div className="pl-9 pt-2">
                          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                            <span className="font-bold text-slate-800 block">Explanation:</span>
                            <p>{q.explanation}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit Action */}
              {!englishSubmitted && (
                <div className="text-center pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (Object.keys(englishAnswers).length < englishDiagnosticTest.questions.length) {
                        alert(`Please answer all ${englishDiagnosticTest.questions.length} questions before submitting.`);
                        return;
                      }
                      setEnglishSubmitted(true);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-semibold px-8 py-3.5 rounded-xl shadow-soft-sm transition-colors"
                  >
                    Submit &amp; View Diagnostic Breakdown
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Leadership Communication Style */}
          {activeTest === 'leadership' && (
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm">
                <h2 className="font-heading font-bold text-xl text-slate-900">
                  {leadershipAssessmentTest.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {leadershipAssessmentTest.description}
                </p>
              </div>

              {leadershipSubmitted && (
                <div className="p-6 rounded-2xl bg-white border-2 border-brand-teal shadow-soft-md text-center space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                    Your Dominant Leadership Archetype
                  </span>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
                    {getDominantLeadershipStyle()}
                  </div>
                  <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                    Based on principles from Vidya Wankhade's executive literature <em>“101 Management Books You'll Never Read But Should”</em>, your natural inclination drives influence through clear accountability and structured empowerment.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <Link
                      to="/courses/advanced-english-leadership-presence"
                      className="bg-brand-primary text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm"
                    >
                      Explore Leadership Presence Course
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setLeadershipAnswers({});
                        setLeadershipSubmitted(false);
                      }}
                      className="bg-slate-100 text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-lg border border-slate-200"
                    >
                      Reset Assessment
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {leadershipAssessmentTest.questions.map((q, idx) => (
                  <div
                    key={q.id}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-teal-50 text-brand-teal text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <h3 className="font-heading font-semibold text-base text-slate-900 leading-snug">
                        {q.question}
                      </h3>
                    </div>

                    <div className="space-y-2 pt-1 pl-9">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = leadershipAnswers[q.id] === opt.style;
                        return (
                          <button
                            key={oIdx}
                            type="button"
                            onClick={() => handleLeadershipSelect(q.id, opt.style)}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all ${
                              isSelected
                                ? 'bg-teal-50 border-teal-500 text-teal-950 font-semibold ring-1 ring-teal-500'
                                : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <span>{opt.text}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {!leadershipSubmitted && (
                <div className="text-center pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (Object.keys(leadershipAnswers).length < leadershipAssessmentTest.questions.length) {
                        alert('Please answer all 5 questions to generate your style archetype.');
                        return;
                      }
                      setLeadershipSubmitted(true);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-semibold px-8 py-3.5 rounded-xl shadow-soft-sm transition-colors"
                  >
                    Calculate Leadership Archetype
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
