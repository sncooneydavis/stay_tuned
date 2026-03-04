import { useState } from 'react';
import '../styles/Newsletter.css';

// Matches: anything@anything.com/org/edu — loose check, not full RFC 5322
const EMAIL_PATTERN = /.+@.+\.(com|org|edu)$/i;

export function Newsletter() {
  const [email, setEmail] = useState('');

  const isValid = EMAIL_PATTERN.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    // TODO: wire up to backend newsletter endpoint
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="newsletter block">
      <div className="newsletter__text">
        <h2 className="newsletter__heading">Stay tuned to our newsletter</h2>
        <p className="newsletter__subtext">for new releases and events</p>
      </div>
      <form className="newsletter__form" onSubmit={handleSubmit}>
        <div className="newsletter__input-wrapper">
          <input
            type="email"
            className="newsletter__input"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {isValid && (
            <button type="submit" className="newsletter__submit" aria-label="Subscribe">
              &#x2192;
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
