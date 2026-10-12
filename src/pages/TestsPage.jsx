import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Compass,
  ArrowRight,
  Lock,
  User,
  Mail,
  Key,
  LogOut,
  ShieldCheck,
  BookOpen,
  Award,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useAuth } from '../context/AuthContext';
import { englishDiagnosticTest, leadershipAssessmentTest } from '../data/testsData';

export default function TestsPage({ onOpenEnquiry }) {
  const { user, isAuthenticated, login, logout } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  // Determine requested test from URL query param (e.g. ?test=leadership or ?test=english)
  const initialTestParam = searchParams.get('test');
  const validTestKey = initialTestParam === 'leadership' ? 'leadership' : 'english';

  const [activeTest, setActiveTest] = useState(validTestKey);
  const [pendingTest, setPendingTest] = useState(validTestKey);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Sync activeTest when searchParams change
  useEffect(() => {
    const param = searchParams.get('test');
    if (param === 'leadership' || param === 'english') {
      setActiveTest(param);
      setPendingTest(param);
    }
  }, [searchParams]);

  // Demo Login Form State
  const [loginForm, setLoginForm] = useState({
    name: '',
    email: '',
    passcode: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [authSuccessNotice, setAuthSuccessNotice] = useState(false);

  // English Diagnostic State
  const [englishAnswers, setEnglishAnswers] = useState({});
  const [englishSubmitted, setEnglishSubmitted] = useState(false);

  // Leadership Assessment State
  const [leadershipAnswers, setLeadershipAnswers] = useState({});
  const [leadershipSubmitted, setLeadershipSubmitted] = useState(false);

  // Switch test handler (keeps URL in sync)
  const handleSelectTest = (testKey) => {
    setPendingTest(testKey);
    if (isAuthenticated) {
      setActiveTest(testKey);
      setSearchParams({ test: testKey }, { replace: true });
    } else {
      setShowLoginModal(true);
    }
  };

  // Quick fill demo student credentials
  const handleFillDemoCredentials = () => {
    setLoginForm({
      name: 'Aditi Kulkarni',
      email: 'aditi.student@consistent.in',
      passcode: 'DEMO-PASS-2026',
    });
    setFormErrors({});
  };

  // Handle Demo Login Submit
  const handleDemoLogin = (e) => {
    e.preventDefault();
    const errors = {};

    if (!loginForm.name.trim() || loginForm.name.trim().length < 2) {
      errors.name = 'Please enter your candidate name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!loginForm.email.trim() || !emailRegex.test(loginForm.email.trim())) {
      errors.email = 'Please enter a valid student email address.';
    }

    if (!loginForm.passcode || loginForm.passcode.length < 4) {
      errors.passcode = 'Demo passcode must be at least 4 characters.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setAuthSuccessNotice(false);
      return;
    }

    // Valid demo credentials - authenticate via context
    setFormErrors({});
    login({
      name: loginForm.name.trim(),
      email: loginForm.email.trim(),
    });

    setAuthSuccessNotice(true);
    // Unhide modal and immediately load the test originally selected
    setTimeout(() => {
      setActiveTest(pendingTest);
      setSearchParams({ test: pendingTest }, { replace: true });
      setShowLoginModal(false);
      setAuthSuccessNotice(false);
    }, 400);
  };

  // Logout handler
  const handleLogout = () => {
    logout();
    setShowLoginModal(false);
    setEnglishSubmitted(false);
    setLeadershipSubmitted(false);
    setEnglishAnswers({});
    setLeadershipAnswers({});
  };

  // Handle English option select
  const handleEnglishSelect = (qId, optionIdx) => {
    if (englishSubmitted) return;
    setEnglishAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  // Calculate English Score
  const calculateEnglishScore = () => {
    let score = 0;
    englishDiagnosticTest.questions.forEach((q) => {
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
    setLeadershipAnswers((prev) => ({ ...prev, [qId]: style }));
  };

  // Calculate Dominant Leadership Style
  const getDominantLeadershipStyle = () => {
    const counts = {};
    Object.values(leadershipAnswers).forEach((style) => {
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

  const englishAnsweredCount = Object.keys(englishAnswers).length;
  const leadershipAnsweredCount = Object.keys(leadershipAnswers).length;

  return (
    <>
      <SEOHead
        title="Diagnostic Proficiency Tests & Assessments | The Consistent Academy"
        description="Take our free 10-question English diagnostic test and leadership communication style assessment. Candidate portal demo login unlocks instant scoring."
        canonical="https://www.theconsistentacademy.in/tests"
      />

      {/* Header Section */}
      <section className="bg-white dark:bg-slate-900 py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-purple-950/60 text-brand-primary dark:text-purple-300 border border-brand-200 dark:border-purple-800/60">
            <Sparkles size={13} />
            <span>Interactive Academy Diagnostics</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight">
            Academic Assessments &amp; Placement Tools
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Evaluate your baseline English grammar skills or uncover your executive communication style with our structured interactive diagnostics.
          </p>

          {/* Logged In Status Banner OR Test Selector Tabs */}
          {isAuthenticated && user ? (
            <div className="pt-4 max-w-2xl mx-auto">
              <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'S'}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-bold text-sm text-slate-950 dark:text-white">
                        {user.name}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-brand-primary dark:text-purple-300 font-semibold">
                        {user.studentId}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {user.email} &bull; <span className="text-emerald-600 dark:text-emerald-400 font-medium">Session Active</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/50 border border-rose-200 dark:border-rose-800 transition-colors"
                    title="Log out of diagnostic session"
                  >
                    <LogOut size={13} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>

              {/* Assessment Switcher Tabs */}
              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => handleSelectTest('english')}
                  className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    activeTest === 'english'
                      ? 'bg-brand-primary dark:bg-purple-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  English Diagnostic (10 Questions)
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectTest('leadership')}
                  className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    activeTest === 'leadership'
                      ? 'bg-brand-primary dark:bg-purple-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Leadership Communication Style
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
              Select an assessment below to begin. A quick candidate demo login is required to record your responses.
            </div>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ========================================================================= */}
          {/* CASE 1: Visitor is NOT authenticated - Display Assessment Selection Cards */}
          {/* ========================================================================= */}
          {!isAuthenticated ? (
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h2 className="font-heading font-bold text-2xl text-slate-950 dark:text-white">
                  Available Diagnostic Assessments
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                  Choose a diagnostic module below. You will be prompted with a brief demo authentication screen to unlock test questions and instant reporting.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* English Diagnostic Card */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-brand-50 dark:bg-purple-950/60 text-brand-primary dark:text-purple-300 border border-brand-200 dark:border-purple-800/60">
                      <BookOpen size={12} />
                      <span>Grammar &amp; Vocabulary</span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-slate-950 dark:text-white">
                      {englishDiagnosticTest.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {englishDiagnosticTest.description}
                    </p>

                    <div className="pt-2 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400" />
                        <span>10 multiple-choice questions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400" />
                        <span>Estimated time: 8-10 minutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400" />
                        <span>Instant score and personalized course matching</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectTest('english')}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-sm transition-colors"
                  >
                    <Lock size={14} />
                    <span>Start English Diagnostic</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                {/* Leadership Style Card */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60">
                      <Compass size={12} />
                      <span>Executive Presence</span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-slate-950 dark:text-white">
                      {leadershipAssessmentTest.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {leadershipAssessmentTest.description}
                    </p>

                    <div className="pt-2 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-teal-600 dark:text-teal-400" />
                        <span>5 workplace dilemma scenarios</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-teal-600 dark:text-teal-400" />
                        <span>Estimated time: 5-6 minutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-teal-600 dark:text-teal-400" />
                        <span>Archetype derived from Vidya Wankhade&apos;s management literature</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectTest('leadership')}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-sm transition-colors"
                  >
                    <Lock size={14} />
                    <span>Start Leadership Assessment</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Institutional Assurance Badge */}
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                <ShieldCheck size={18} className="text-brand-primary dark:text-purple-400 flex-shrink-0" />
                <p>
                  Assessments are designed solely for pedagogical evaluation and course placement at The Consistent Academy. Results provide diagnostic indicators rather than formal academic certification.
                </p>
              </div>
            </div>
          ) : (

            /* ========================================================================= */
            /* CASE 2: User IS authenticated - Render Selected Assessment Questions      */
            /* ========================================================================= */
            <div className="space-y-6">
              
              {/* TAB 1: English Diagnostic Test */}
              {activeTest === 'english' && (
                <div className="space-y-6">
                  {/* Test Overview Card */}
                  <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-semibold text-brand-primary dark:text-purple-400 uppercase tracking-wider block">
                        Diagnostic Assessment &bull; English Language Baseline
                      </span>
                      <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-950 dark:text-white mt-1">
                        {englishDiagnosticTest.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {englishDiagnosticTest.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0 text-left sm:text-right bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                        Progress
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {englishAnsweredCount} / {englishDiagnosticTest.questions.length} Answered
                      </span>
                    </div>
                  </div>

                  {/* Score Display If Submitted */}
                  {englishSubmitted && (
                    <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border-2 border-brand-primary dark:border-purple-500 text-center space-y-4 shadow-sm">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-purple-400">
                        Assessment Result &bull; Candidate: {user.name}
                      </span>
                      <div className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-950 dark:text-white">
                        {calculateEnglishScore()} / {englishDiagnosticTest.questions.length}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
                        {calculateEnglishScore() >= 8 ? (
                          <span>
                            <strong>Strong Baseline:</strong> You demonstrate solid grammatical intuition. We recommend our <strong>IELTS Prep</strong> or <strong>Advanced Leadership Presence</strong> courses to take your speaking and analytical articulation to mastery.
                          </span>
                        ) : calculateEnglishScore() >= 5 ? (
                          <span>
                            <strong>Good Foundation:</strong> You grasp key principles but need polish in formal grammatical modifiers and prepositions. Our <strong>Communication Skill Training</strong> or <strong>Targeted IELTS Modules</strong> are ideal for you.
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
                          className="bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
                        >
                          Book 1-on-1 Academic Counseling
                        </button>
                        <button
                          type="button"
                          onClick={resetEnglishTest}
                          className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 inline-flex items-center gap-1.5 transition-colors"
                        >
                          <RotateCcw size={13} />
                          <span>Retake Test</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Questions List */}
                  <div className="space-y-5">
                    {englishDiagnosticTest.questions.map((q, idx) => {
                      const selectedIdx = englishAnswers[q.id];
                      const isCorrect = selectedIdx === q.correctAnswer;

                      return (
                        <div
                          key={q.id}
                          className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4"
                        >
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded bg-brand-50 dark:bg-slate-800 text-brand-primary dark:text-purple-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <h3 className="font-heading font-semibold text-sm sm:text-base text-slate-950 dark:text-white leading-snug">
                              {q.question}
                            </h3>
                          </div>

                          {/* Options */}
                          <div className="space-y-2 pt-1 pl-9">
                            {q.options.map((opt, oIdx) => {
                              const isOptionSelected = selectedIdx === oIdx;
                              let optionStyle = "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300";

                              if (englishSubmitted) {
                                if (oIdx === q.correctAnswer) {
                                  optionStyle = "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-600 text-emerald-900 dark:text-emerald-200 font-medium";
                                } else if (isOptionSelected && !isCorrect) {
                                  optionStyle = "bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-200";
                                } else {
                                  optionStyle = "border-slate-200 dark:border-slate-800 text-slate-400 opacity-60";
                                }
                              } else if (isOptionSelected) {
                                optionStyle = "bg-brand-50 dark:bg-slate-800 border-brand-primary dark:border-purple-500 text-brand-primary dark:text-purple-300 font-semibold ring-1 ring-brand-primary dark:ring-purple-500";
                              }

                              return (
                                <button
                                  key={oIdx}
                                  type="button"
                                  onClick={() => handleEnglishSelect(q.id, oIdx)}
                                  className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-colors flex items-center justify-between gap-3 ${optionStyle}`}
                                >
                                  <span>{opt}</span>
                                  {englishSubmitted && oIdx === q.correctAnswer && (
                                    <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                                  )}
                                  {englishSubmitted && isOptionSelected && !isCorrect && (
                                    <AlertCircle size={16} className="text-rose-500 dark:text-rose-400 flex-shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* Explanation if submitted */}
                          {englishSubmitted && (
                            <div className="pl-9 pt-1">
                              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                                <span className="font-bold text-slate-800 dark:text-slate-200 block">Explanation:</span>
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
                          window.scrollTo({ top: 220, behavior: 'smooth' });
                        }}
                        className="bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-lg shadow-sm transition-colors"
                      >
                        Submit &amp; View Diagnostic Breakdown
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: Leadership Communication Style */}
              {activeTest === 'leadership' && (
                <div className="space-y-6">
                  {/* Test Overview Card */}
                  <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider block">
                        Diagnostic Assessment &bull; Executive Influence
                      </span>
                      <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-950 dark:text-white mt-1">
                        {leadershipAssessmentTest.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {leadershipAssessmentTest.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0 text-left sm:text-right bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                        Progress
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {leadershipAnsweredCount} / {leadershipAssessmentTest.questions.length} Answered
                      </span>
                    </div>
                  </div>

                  {leadershipSubmitted && (
                    <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-600 dark:border-teal-500 text-center space-y-4 shadow-sm">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                        Dominant Leadership Archetype &bull; Candidate: {user.name}
                      </span>
                      <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950 dark:text-white">
                        {getDominantLeadershipStyle()}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
                        Based on principles from Vidya Wankhade&apos;s executive literature <em>&ldquo;101 Management Books You&apos;ll Never Read But Should&rdquo;</em>, your natural communication pattern drives influence through clear accountability and structured empowerment.
                      </p>
                      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                        <Link
                          to="/courses/advanced-english-leadership-presence"
                          className="bg-brand-primary dark:bg-purple-600 hover:bg-brand-primary-hover text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
                        >
                          Explore Leadership Presence Course
                        </Link>
                        <button
                          type="button"
                          onClick={() => {
                            setLeadershipAnswers({});
                            setLeadershipSubmitted(false);
                          }}
                          className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 inline-flex items-center gap-1.5 transition-colors"
                        >
                          <RotateCcw size={13} />
                          <span>Reset Assessment</span>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-5">
                    {leadershipAssessmentTest.questions.map((q, idx) => (
                      <div
                        key={q.id}
                        className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <h3 className="font-heading font-semibold text-sm sm:text-base text-slate-950 dark:text-white leading-snug">
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
                                className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-colors ${
                                  isSelected
                                    ? 'bg-teal-50 dark:bg-teal-950/50 border-teal-500 text-teal-950 dark:text-teal-200 font-semibold ring-1 ring-teal-500'
                                    : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
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
                          window.scrollTo({ top: 220, behavior: 'smooth' });
                        }}
                        className="bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-lg shadow-sm transition-colors"
                      >
                        Calculate Leadership Archetype
                      </button>
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* DEMO STUDENT LOGIN MODAL                                                 */}
      {/* ========================================================================= */}
      {showLoginModal && !isAuthenticated && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-login-title"
        >
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl space-y-5 relative">
            
            {/* Modal Header */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold bg-brand-50 dark:bg-purple-950/60 text-brand-primary dark:text-purple-300 border border-brand-200 dark:border-purple-800/60">
                <ShieldCheck size={12} />
                <span>Frontend Prototype &bull; Student Demo Auth</span>
              </div>
              <h2 id="demo-login-title" className="font-heading font-extrabold text-xl text-slate-950 dark:text-white">
                Student Assessment Access
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                You are entering:{' '}
                <strong className="text-slate-900 dark:text-white">
                  {pendingTest === 'leadership' ? leadershipAssessmentTest.title : englishDiagnosticTest.title}
                </strong>
                . Complete this demo authentication to track your responses.
              </p>
            </div>

            {/* Demo Notice Banner */}
            <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold">
                <HelpCircle size={13} />
                <span>Demonstration Mode</span>
              </div>
              <p className="text-[11px] text-amber-800/90 dark:text-amber-300/80 leading-relaxed">
                This is a client-side prototype. No server or production database is attached. Enter your details or click below for one-click demo credentials.
              </p>
            </div>

            {/* Quick Fill Button */}
            <button
              type="button"
              onClick={handleFillDemoCredentials}
              className="w-full py-2 px-3 rounded-lg border border-purple-200 dark:border-purple-800 bg-purple-50/60 dark:bg-purple-950/40 hover:bg-purple-100/70 dark:hover:bg-purple-900/40 text-brand-primary dark:text-purple-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Sparkles size={13} />
              <span>Use Sample Student Account (Aditi Kulkarni)</span>
            </button>

            {/* Login Form */}
            <form onSubmit={handleDemoLogin} className="space-y-4" noValidate>
              {/* Full Name */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <div className="relative">
                  <User size={14} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={loginForm.name}
                    onChange={(e) => setLoginForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                      formErrors.name
                        ? 'border-rose-400 dark:border-rose-600 ring-1 ring-rose-400'
                        : 'border-slate-300 dark:border-slate-700'
                    }`}
                  />
                </div>
                {formErrors.name && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle size={11} />
                    <span>{formErrors.name}</span>
                  </p>
                )}
              </div>

              {/* Student Email */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Student Email
                </label>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="e.g. priya.sharma@example.com"
                    className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                      formErrors.email
                        ? 'border-rose-400 dark:border-rose-600 ring-1 ring-rose-400'
                        : 'border-slate-300 dark:border-slate-700'
                    }`}
                  />
                </div>
                {formErrors.email && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle size={11} />
                    <span>{formErrors.email}</span>
                  </p>
                )}
              </div>

              {/* Demo Passcode */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Candidate Passcode
                  </label>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    (Any 4+ characters for demo)
                  </span>
                </div>
                <div className="relative">
                  <Key size={14} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="password"
                    value={loginForm.passcode}
                    onChange={(e) => setLoginForm((prev) => ({ ...prev, passcode: e.target.value }))}
                    placeholder="••••••••"
                    className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                      formErrors.passcode
                        ? 'border-rose-400 dark:border-rose-600 ring-1 ring-rose-400'
                        : 'border-slate-300 dark:border-slate-700'
                    }`}
                  />
                </div>
                {formErrors.passcode && (
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle size={11} />
                    <span>{formErrors.passcode}</span>
                  </p>
                )}
              </div>

              {/* Auth Success Banner (Only shown momentarily AFTER valid submission) */}
              {authSuccessNotice && (
                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-xs text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400" />
                  <span>Authenticated successfully! Opening your assessment...</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-sm transition-colors"
                >
                  Authenticate &amp; Start Test
                </button>
                <button
                  type="button"
                  onClick={() => setShowLoginModal(false)}
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
