import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, Handshake, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <FileText size={36} color="#10b981" />,
    title: 'Submit Your Application',
    desc: 'Fill out our simple partner registration form with your business details, service type, and contact information.',
    color: '#10b981',
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=400',
  },
  {
    number: '02',
    icon: <Search size={36} color="#8b5cf6" />,
    title: 'Verification & Review',
    desc: 'Our team will verify your documents and review your application within 2–3 business days.',
    color: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400',
  },
  {
    number: '03',
    icon: <Handshake size={36} color="#f59e0b" />,
    title: 'Agreement & Onboarding',
    desc: 'Sign the partnership agreement and complete the onboarding training with our dedicated support team.',
    color: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=400',
  },
  {
    number: '04',
    icon: <Rocket size={36} color="#ec4899" />,
    title: 'Go Live & Earn',
    desc: 'Get listed on OneBuddy, start receiving orders, and grow your business with our platform.',
    color: '#ec4899',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=400',
  },
];


const PartnerWithUs = ({ onClose }) => {

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
          {/* <p className="partner-steps-sub">Join OneBuddy as a partner and start earning in just a few easy steps.</p> */}
        </div>

        <div className="process__steps-wrap">
          <ol className="process__steps">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="process__step"
                style={{ "--offset": `${(steps.length - 1 - index) * 60}px` }}
              >
                <article
                  className="process__card"
                  style={{ "--card-color": step.color }}
                >
                  <div
                    className="process__card-inner"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.55)), url(${step.image})`
                    }}
                  >
                    <span className="process__number" aria-hidden="true" style={{ color: step.color }}>
                      {index + 1}
                    </span>
                    <div className="process__card-icon" style={{ color: step.color, marginBottom: '16px' }}>
                      {step.icon}
                    </div>
                    <h3 className="process__card-title">{step.title}</h3>
                    <p className="process__card-text">{step.desc}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerWithUs;
