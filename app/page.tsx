export default function Home() {
  const faqs = [
    {
      q: 'How does prompt A/B testing work?',
      a: 'Create an experiment with multiple prompt variations. Our API randomly serves each variant to your users and tracks which one drives more conversions based on your defined success metrics.'
    },
    {
      q: 'What counts as a conversion event?',
      a: 'You define it — a user clicking a button, completing a task, rating a response positively, or any custom event you instrument in your app via our simple tracking API.'
    },
    {
      q: 'Can I use this with any AI provider?',
      a: 'Yes. Prompt A/B Test Tracker is provider-agnostic. It stores and serves your prompt text; you pass it to OpenAI, Anthropic, Gemini, or any other model you use.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          A/B Test Your AI Prompts.<br />
          <span className="text-[#58a6ff]">Track What Actually Converts.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Run multiple prompt variations simultaneously and discover which drives better outcomes — with real-time conversion analytics built for AI-powered SaaS founders.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $29/mo
        </a>
        <p className="text-xs text-[#484f58] mt-3">No credit card required for 14-day trial. Cancel anytime.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '⚡', title: 'Instant Variants', desc: 'Create prompt experiments in seconds with our simple dashboard.' },
          { icon: '📊', title: 'Live Analytics', desc: 'Real-time conversion rates per variant so you act on data, not guesses.' },
          { icon: '🔌', title: 'One-line API', desc: 'Integrate with any AI provider using a single API call to fetch variants.' }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to optimize AI prompts at scale.</p>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              'Unlimited experiments',
              'Up to 10 prompt variants per test',
              '1M conversion events/mo',
              'Real-time analytics dashboard',
              'REST API + webhook support',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(faq => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] mt-20">
        © {new Date().getFullYear()} Prompt A/B Test Tracker. All rights reserved.
      </footer>
    </main>
  )
}
