export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-800 bg-surface/40 p-8">
            <p className="text-neon-green uppercase tracking-[0.22em] text-xs mb-3">Contact Us</p>
            <h1 className="text-4xl font-black text-white mb-4">We are here to help players fast.</h1>
            <p className="text-gray-300 mb-8">
              For account, order, key activation, and tournament inquiries, reach out through the channels below.
            </p>
            <div className="space-y-4 text-gray-300">
              <p><span className="text-white font-semibold">Email:</span> support@sandeepgamingstore.com</p>
              <p><span className="text-white font-semibold">Sales:</span> sales@sandeepgamingstore.com</p>
              <p><span className="text-white font-semibold">Phone:</span> +91 99999 99999</p>
              <p><span className="text-white font-semibold">Hours:</span> Mon - Sun, 9:00 AM to 11:00 PM IST</p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-surface/40 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Contact Form</h2>
            <form className="space-y-4">
              <input className="w-full rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-green" placeholder="Your name" />
              <input className="w-full rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-green" placeholder="Your email" />
              <select className="w-full rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-green">
                <option>Order issue</option>
                <option>Activation issue</option>
                <option>Tournament question</option>
                <option>General inquiry</option>
              </select>
              <textarea className="w-full rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-green min-h-32" placeholder="Tell us what happened..." />
              <button type="button" className="w-full rounded-lg bg-neon-green px-5 py-3 font-bold text-black hover:brightness-110 transition">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
