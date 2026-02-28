import '../styles/FaqItem.css';

export function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button type="button" className="faq-item__row" onClick={onToggle}>
        <span className="faq-item__text">{question}</span>
        <span className="faq-item__icon">+</span>
      </button>
      {/* grid-template-rows transition: smoother than max-height, avoids an arbitrary large value */}
      <div className={`faq-item__answer-wrapper${isOpen ? ' faq-item__answer-wrapper--open' : ''}`}>
        <div className="faq-item__answer-inner">
          <div className="faq-item__answer">{answer}</div>
        </div>
      </div>
    </div>
  );
}
