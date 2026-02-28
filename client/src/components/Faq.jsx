import { useState, useEffect } from 'react';
import { FaqItem } from './FaqItem';
import '../styles/Faq.css';

const FAQ_DATA = [
  {
    question: 'Do you buy used records, CDs, and cassettes?',
    answer: (
      <>
        <p>Yes! Stay Tuned Records will buy your used vinyl records, CDs, and cassettes that are in good condition. <strong>We are especially interested in your vinyl collection if it includes:</strong></p>
        <ul>
          <li>Metal</li>
          <li>Punk</li>
          <li>Reggae</li>
          <li>RnB</li>
          <li>Hip Hop</li>
          <li>'80s, '90s, and Contemporary Pop</li>
          <li>Big names in Rock, Country, Blues, Jazz, Funk/Soul</li>
        </ul>
        <p>In any case, please feel free to call us (or come in) and ask us about buying your records!</p>
      </>
    ),
  },
  {
    question: 'What are your payment options?',
    answer: <p>We accept cash, Visa, Mastercard, American Express, and Discover!</p>,
  },
  {
    question: 'Can I order vinyls through your shop?',
    answer: <p>Yes! We work with more than one distributor. Barring rare, vintage collectors' items, there is a good chance we can get our hands on the LP you are looking for. Feel free to call, email, or come into the store to ask us about ordering your new edition to your collection!</p>,
  },
  {
    question: 'Do you repair record players and stereo systems?',
    answer: <p>We can help with light repairs in-store. If your turntable is experiencing issues with receiving power, or if the speakers appear to be damaged, we will typically outsource these fixes to a local audio repair shop. In all cases, feel free to call and ask–we can help you navigate the issue!</p>,
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (openIndex === null) return;
    const close = () => setOpenIndex(null);
    // capture: true catches scroll on any scrollable element, not just window
    document.addEventListener('click', close);
    window.addEventListener('scroll', close, { capture: true });
    return () => {
      document.removeEventListener('click', close);
      window.removeEventListener('scroll', close, { capture: true });
    };
  }, [openIndex]);

  const handleToggle = (index, e) => {
    // stopPropagation prevents the document click listener from immediately closing the card we just opened
    e.stopPropagation();
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <div className="faq block">
      {FAQ_DATA.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={(e) => handleToggle(index, e)}
        />
      ))}
    </div>
  );
}
