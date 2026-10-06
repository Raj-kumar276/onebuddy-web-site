import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: '📝',
    title: 'Submit Your Application',
    desc: 'Fill out our simple partner registration form with your business details, service type, and contact information.',
    color: '#10b981',
  },
  {
    number: '02',
    icon: '🔍',
    title: 'Verification & Review',
    desc: 'Our team will verify your documents and review your application within 2–3 business days.',
    color: '#8b5cf6',
  },
  {
    number: '03',
    icon: '🤝',
    title: 'Agreement & Onboarding',
    desc: 'Sign the partnership agreement and complete the onboarding training with our dedicated support team.',
    color: '#f59e0b',
  },
  {
    number: '04',
    icon: '🚀',
    title: 'Go Live & Earn',
    desc: 'Get listed on OneBuddy, start receiving orders, and grow your business with our platform.',
    color: '#ec4899',
  },
];

const quotes = [
  {
    text: "Joining OneBuddy was the best decision for my restaurant. Orders tripled in the first month!",
    author: "Ravi Kumar",
    role: "Restaurant Owner, Hyderabad",
    avatar: "🍽️",
  },
  {
    text: "The onboarding was super smooth. I was live within 48 hours and started earning immediately.",
    author: "Priya Sharma",
    role: "Grocery Partner, Bengaluru",
    avatar: "🛒",
  },
  {
    text: "OneBuddy gave my home services business the visibility it needed. My earnings doubled!",
    author: "Suresh Reddy",
    role: "Home Services Partner, Chennai",
    avatar: "🔧",
  },
  {
    text: "The platform is super easy to use. Real-time earnings tracking keeps me motivated every day.",
    author: "Anitha Rao",
    role: "Healthcare Partner, Pune",
    avatar: "💊",
  },
  {
    text: "Best partnership I've ever had. Zero hassle, maximum earnings. Highly recommend OneBuddy!",
    author: "Mohan Das",
    role: "Ride Partner, Mumbai",
    avatar: "🚗",
  },
];

const PartnerWithUs = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', type: '', city: '' });
  const [submitted, setSubmitted] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const goToQuote = (i) => {
    setDirection(i > quoteIndex ? 1 : -1);
    setQuoteIndex(i);
  };

  return (
    <div className="partner-page">
      {/* Close Button */}
      <button className="partner-close-btn" onClick={onClose} aria-label="Close">
        ✕ Back to Home
      </button>

      {/* Hero Image — full width, half screen height */}
      <div className="partner-hero">
        <img src="/partner_hero.jpg" alt="Partner with OneBuddy" className="partner-hero-img" />
        <div className="partner-hero-overlay">
          <motion.div
            className="partner-hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="partner-overline">partner with onebuddy</span>
            <h1 className="partner-headline">Partner <em>With Us</em></h1>
            <p className="partner-subtext">
              Grow your business by joining India's fastest-growing multi-service platform.
              Reach thousands of customers instantly.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Registration Steps */}
      <section className="partner-steps-section">
        <div className="partner-steps-header">
          <span className="partner-steps-overline">How It Works</span>
          <h2 className="partner-steps-title">4 Simple Steps to Get Started</h2>
          <p className="partner-steps-sub">Join OneBuddy as a partner and start earning in just a few easy steps.</p>
        </div>

        <div className="partner-steps-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="partner-step-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              style={{ borderTop: `4px solid ${step.color}` }}
            >
              <div className="partner-step-num" style={{ color: step.color }}>{step.number}</div>
              <div className="partner-step-icon">{step.icon}</div>
              <h3 className="partner-step-title">{step.title}</h3>
              <p className="partner-step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quotes / Testimonials Section */}
      <section className="partner-quotes-section">
        <div className="partner-quotes-header">
          <span className="partner-steps-overline">What Our Partners Say</span>
          <h2 className="partner-steps-title">Success Stories</h2>
        </div>

        <div className="partner-quote-stage">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={quoteIndex}
              className="partner-quote-card"
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            >
              <div className="partner-quote-avatar">{quotes[quoteIndex].avatar}</div>
              <p className="partner-quote-text">"{quotes[quoteIndex].text}"</p>
              <div className="partner-quote-author">{quotes[quoteIndex].author}</div>
              <div className="partner-quote-role">{quotes[quoteIndex].role}</div>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="partner-quote-dots">
            {quotes.map((_, i) => (
              <button
                key={i}
                className={`partner-quote-dot ${i === quoteIndex ? 'active' : ''}`}
                onClick={() => goToQuote(i)}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="partner-form-section">
        <div className="partner-form-wrap">
          <div className="partner-form-left">
            <span className="partner-form-overline">Apply Now</span>
            <h2 className="partner-form-title">Start Your Partnership Journey</h2>
            <p className="partner-form-sub">
              Fill in your details and our team will reach out within 48 hours to guide you through the next steps.
            </p>
            <ul className="partner-benefits">
              <li>✅ Zero commission for first 3 months</li>
              <li>✅ Dedicated support manager</li>
              <li>✅ Real-time earnings dashboard</li>
              <li>✅ Flexible working hours</li>
              <li>✅ Instant payment settlements</li>
            </ul>
          </div>

          <div className="partner-form-right">
            {submitted ? (
              <motion.div
                className="partner-success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="partner-success-icon">🎉</div>
                <h3>Application Submitted!</h3>
                <p>Thank you for your interest. Our team will contact you within 48 hours.</p>
              </motion.div>
            ) : (
              <form className="partner-form" onSubmit={handleSubmit}>
                <div className="partner-form-row">
                  <div className="partner-form-group">
                    <label htmlFor="partner-name">Full Name *</label>
                    <input id="partner-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="partner-form-group">
                    <label htmlFor="partner-business">Business Name *</label>
                    <input id="partner-business" name="business" type="text" placeholder="Your business name" value={form.business} onChange={handleChange} required />
                  </div>
                </div>
                <div className="partner-form-row">
                  <div className="partner-form-group">
                    <label htmlFor="partner-email">Email Address *</label>
                    <input id="partner-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="partner-form-group">
                    <label htmlFor="partner-phone">Phone Number *</label>
                    <input id="partner-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                  </div>
                </div>
                <div className="partner-form-row">
                  <div className="partner-form-group">
                    <label htmlFor="partner-type">Service Type *</label>
                    <select id="partner-type" name="type" value={form.type} onChange={handleChange} required>
                      <option value="">Select a category</option>
                      <option value="food">Food & Restaurant</option>
                      <option value="grocery">Grocery & Retail</option>
                      <option value="ride">Ride / Transport</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="home">Home Services</option>
                    </select>
                  </div>
                  <div className="partner-form-group">
                    <label htmlFor="partner-city">City *</label>
                    <input id="partner-city" name="city" type="text" placeholder="Your city" value={form.city} onChange={handleChange} required />
                  </div>
                </div>
                <button type="submit" className="partner-submit-btn">
                  Submit Application →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerWithUs;
