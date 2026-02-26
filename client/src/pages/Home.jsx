import { Hero } from '../components/Hero';
import { Event } from '../components/Event';

export default function Home() {
  return (
    <>
      <section className="section">
        <Hero />
        <Event />
      </section>
      <section className="section">
        {/* Just In */}
        {/* Staff Picks */}
      </section>
      <section className="section">
        {/* FAQ */}
        {/* Newsletter */}
        {/* Footer */}
      </section>
    </>
  );
}
