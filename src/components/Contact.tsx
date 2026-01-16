import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const CONTACT_EMAIL: string = import.meta.env.VITE_CONTACT_EMAIL || 'example.email.com'
  const CONTACT_NUMBER: string = import.meta.env.VITE_CONTACT_NUMBER || '123-456-7890'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: CONTACT_EMAIL,
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            service: formData.service || 'Not specified',
            message: formData.message,
          },
        }),
      });

      if (!response.ok) throw new Error('Failed to send email');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  function formatUSPhoneNumber(number: string) {
    const digits = String(number).replace(/\D/g, '');

    if (digits.length !== 10) {
      throw new Error(
        `VITE_CONTACT_NUMBER must be 10 digits, got "${number}" (${digits.length} digits after cleaning)`
      );
    }

    const area   = digits.slice(0, 3);
    const prefix = digits.slice(3, 6);
    const line   = digits.slice(6);

    return `(${area}) ${prefix}-${line}`;
  }

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to transform your space? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-slate-300">Call us for immediate assistance</p>
                  <a href={`tel:+1${CONTACT_NUMBER}`} className="text-red-600 hover:text-red-700 transition-colors">
                    {formatUSPhoneNumber(CONTACT_NUMBER)}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-slate-300">Send us a message anytime</p>
                  <a
                      href={`mailto:${CONTACT_EMAIL}`} className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Service Area</h4>
                  <p className="text-slate-300">Serving South Florida and the surrounding communities</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h4 className="font-bold text-xl mb-3">Business Hours</h4>
              <div className="space-y-2 text-slate-300">
                <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
                <p>Saturday: 7:00 AM - 10:00 PM</p>
                <p>Sunday: 7:00 AM - 10:00PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2
                  focus:ring-amber-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2
                  focus:ring-amber-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2
                  focus:ring-amber-500 focus:border-transparent"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2
                  focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="knockdown">Knockdown Texture</option>
                  <option value="popcorn-removal">Popcorn Removal</option>
                  <option value="stucco">Stucco</option>
                  <option value="accent-walls">Accent Walls</option>
                  <option value="tiling">Tiling</option>
                  <option value="painting">Painting</option>
                  <option value="kitchen">Kitchen Remodeling</option>
                  <option value="carpentry">Carpentry</option>
                  <option value="drywall">Drywall & Metal Studding</option>
                  <option value="bathroom">Bathroom Remodeling</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2
                  focus:ring-red-600 focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-lg
                transition-all duration-300 flex items-center justify-center disabled:opacity-50
                disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
