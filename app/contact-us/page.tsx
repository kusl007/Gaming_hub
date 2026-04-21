import ContactInquiryForm from "@/app/components/ContactInquiryForm";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-gray-800 bg-surface/30 p-6 md:p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Contact <span className="text-neon-green">Sandeep Gaming Store</span>
          </h1>
          <p className="text-gray-300">
            Need help with orders, keys, payments, account login, or tournament registration? Our support team responds quickly.
          </p>
        </div>

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
              <p><span className="text-white font-semibold">Address:</span> Summer Row, Birmingham B3 1JB</p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-surface/40 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Contact Form</h2>
            <ContactInquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
