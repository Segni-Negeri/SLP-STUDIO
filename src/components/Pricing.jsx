import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './Pricing.css';

const Pricing = () => {
  return (
    <section
      style={{
        backgroundImage: 'radial-gradient(100% 100% at 50% 0%, rgba(13,13,17,1), rgba(9,9,11,1))',
      }}
      className="pricingSection-section"
    >
      <div className="pricingSection-container">
        <div className="pricingSection-header">
          <h2 className="pricingSection-title">Pricing</h2>
          <p className="pricingSection-subtitle">
            Use it for free for yourself, upgrade when your team needs advanced control.
          </p>
        </div>

        <div className="pricingSection-grid">
          <PriceCard
            tier="Free"
            price="$0/mo"
            bestFor="Best for 1-5 users"
            cta={<GhostButton className="pricingSection-button pricingSection-button-ghost">Get started free</GhostButton>}
            benefits={[
              { text: 'One workspace', checked: true },
              { text: 'Email support', checked: true },
              { text: '1 day data retention', checked: false },
              { text: 'Custom roles', checked: false },
              { text: 'Priority support', checked: false },
              { text: 'SSO', checked: false },
            ]}
          />
          <PriceCard
            tier="Pro"
            price="$79/mo"
            bestFor="Best for 5-50 users"
            cta={
              <GhostButton className="pricingSection-button pricingSection-button-filled">
                14-day free trial
              </GhostButton>
            }
            benefits={[
              { text: 'Five workspaces', checked: true },
              { text: 'Email support', checked: true },
              { text: '7 day data retention', checked: true },
              { text: 'Custom roles', checked: true },
              { text: 'Priority support', checked: false },
              { text: 'SSO', checked: false },
            ]}
          />
          <PriceCard
            tier="Enterprise"
            price="Contact us"
            bestFor="Best for 50+ users"
            cta={<GhostButton className="pricingSection-button pricingSection-button-ghost">Contact us</GhostButton>}
            benefits={[
              { text: 'Unlimited workspaces', checked: true },
              { text: 'Email support', checked: true },
              { text: '30 day data retention', checked: true },
              { text: 'Custom roles', checked: true },
              { text: 'Priority support', checked: true },
              { text: 'SSO', checked: true },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const PriceCard = ({ tier, price, bestFor, cta, benefits }) => {
  return (
    <Card>
      <div className="pricingSection-card-header">
        <span className="pricingSection-tier">{tier}</span>
        <span className="pricingSection-price">{price}</span>
        <span className="pricingSection-best-for">{bestFor}</span>
      </div>

      <div className="pricingSection-benefits">
        {benefits.map((benefit, index) => (
          <Benefit key={index} text={benefit.text} checked={benefit.checked} />
        ))}
      </div>

      {cta}
    </Card>
  );
};

const Benefit = ({ text, checked }) => {
  return (
    <div className="pricingSection-benefit">
      {checked ? (
        <span className="pricingSection-benefit-icon pricingSection-benefit-icon-checked">
          <Check className="pricingSection-icon" />
        </span>
      ) : (
        <span className="pricingSection-benefit-icon pricingSection-benefit-icon-unchecked">
          <X className="pricingSection-icon" />
        </span>
      )}
      <span className="pricingSection-benefit-text">{text}</span>
    </div>
  );
};

const Card = ({ children }) => {
  return (
    <motion.div
      initial={{ filter: 'blur(2px)' }}
      whileInView={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.25 }}
      className="pricingSection-card"
    >
      {children}
    </motion.div>
  );
};

const GhostButton = ({ children, className }) => {
  return (
    <button className={`${className} pricingSection-button-base`}>
      {children}
    </button>
  );
};

export default Pricing;