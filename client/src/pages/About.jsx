import { useEffect, useRef } from 'react';
import { Footer } from '../components/Footer';
import '../styles/About.css';
import '../styles/layout.css';

export default function About() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    /* Scroll container is .body-container, not the viewport */
    const scrollRoot = document.querySelector('.body-container');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: scrollRoot, threshold: 0.15 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* Section 1: Greeting, polaroid photos, intro, body */}
      <section ref={sectionRefs[0]} className="section about-section">
        <div className="about-inner">
          <p className="intro-text">
            Hey there!
          </p>

          <img
            className="about-img-1"
            src="/assets/images/about-1.png"
            alt="Doug and Aimee in the record store"
          />
          <p className="intro-text">
            We're Doug and Aimee, the duo behind Stay Tuned Records.
          </p>
          <p className="body-1">
            Our journey started back in 2020 when we first met and instantly
            bonded over a shared love of music. For me (Doug), music's always
            been more than just a passion — I've been a musician and producer
            for nearly 20 years, so finding someone who shared that spark was
            a dream come true.
          </p>
        </div>
      </section>

      {/* Section 2: Tarpon Springs story, polaroid, opening day */}
      <section ref={sectionRefs[1]} className="section about-section">
        <div className="about-inner">
          <p className="body-2a">
            In 2022, we moved to Tarpon Springs and fell in love with the
            charm of its historic downtown and tight-knit community. The area
            was only missing one thing: a record store with the same eclectic,
            artsy energy we felt all around us.
          </p>
          <img
            className="about-img-2"
            src="/assets/images/about-2.png"
            alt="Doug and Aimee together"
          />
          <p className="body-2b">
            Eventually we realized that if we wanted it we'd have to make it
            happen ourselves. So, we took a leap of faith and opened Stay
            Tuned Records in April 2025 (on National Record Store Day, no
            less!).
            <img
              className="music-note-inline"
              src="/assets/icons/heart-cd.svg"
              alt=""
            />
          </p>
        </div>
      </section>

      {/* Section 3: Mission, photo collage, welcome, sign-off */}
      <section ref={sectionRefs[2]} className="section about-section">
        <div className="about-inner">
          <div className="section-3-top">
            <p className="body-3a">
              This store was born out of our love for music, community, and each
              other — and we couldn't be more excited to share it with you.
            </p>
            <img
              className="about-img-3"
              src="/assets/images/about-3.png"
              alt="Store photos and vinyl art collage"
            />
          </div>
          <p className="body-3b">
            Whether you're crate-digging for your next favorite album, just
            passing through, or want to talk shop about your
            latest concert obsession, our door's always open!
          </p>
          <div className="sign-off">
            <img src="/assets/icons/heart.svg" alt="" />
            <span>Doug & Aimee</span>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
