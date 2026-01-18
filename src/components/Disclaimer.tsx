import { AlertCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import config from "../config/env.ts";

interface CollapsibleCardProps {
  title: string;
  children: React.ReactNode;
  id: string;
  expanded: { [key: string]: boolean };
  onToggle: (id: string) => void;
}

const CollapsibleCard = (
    { title, children, id, expanded, onToggle }: CollapsibleCardProps
) => (
  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
    <button
      onClick={() => onToggle(id)}
      className="w-full px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
    >
      <h3 className="text-2xl font-bold text-slate-900 text-left">{title}</h3>
      <ChevronDown
        className={`w-6 h-6 text-red-600 shrink-0 transition-transform duration-300 ${
          expanded[id] ? 'rotate-180' : ''
        }`}
      />
    </button>
    {expanded[id] && (
      <div className="px-8 pb-6 border-t border-slate-200">
        {children}
      </div>
    )}
  </div>
);

export default function Disclaimer() {

  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    scope: false,
    limitations: false,
    payment: false,
    acknowledgment: false,
  });

  const toggleSection = (key: string) => {
    setExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="disclaimer" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <AlertCircle className="w-8 h-8 text-red-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Important Disclaimer & Terms
          </h2>
        </div>

        <div className="space-y-6">
          {/* Service Scope */}
          <CollapsibleCard title="Service Scope" id="scope" expanded={expanded} onToggle={toggleSection}>
            <p className="text-lg text-slate-700 leading-relaxed">
              Platinum Finish Group LLC is a professional handyman service specializing in minor home
              repairs, maintenance, and improvement services. We are not a licensed General Contractor (GC)
              and do not perform any work that requires a general contractor's license or permits under
              Florida state law or local regulations.
            </p>
          </CollapsibleCard>

          {/* Scope of Work Limitations */}
          <CollapsibleCard title="Scope of Work Limitations" id="limitations" expanded={expanded} onToggle={toggleSection}>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our services are strictly limited to tasks that fall within the legal scope of unlicensed
              handyman work. For projects requiring permitting, structural modifications, plumbing, electrical
              work, or other regulated trades, we strongly encourage you to consult with appropriately licensed
              professionals. We are happy to recommend trusted partners for specialized work.
            </p>
          </CollapsibleCard>

          {/* Payment & Refund Policy */}
          <div className="bg-red-50 rounded-xl border border-red-200 shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('payment')}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-red-100 transition-colors"
            >
              <h3 className="text-2xl font-bold text-slate-900 text-left">Payment & Refund Policy</h3>
              <ChevronDown
                className={`w-6 h-6 text-red-600 shrink-0 transition-transform duration-300 ${
                  expanded['payment'] ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expanded['payment'] && (
              <div className="px-8 pb-6 border-t border-red-200 space-y-3">
                <p className="text-lg text-slate-700 leading-relaxed">
                  <span className="font-semibold">No Refunds Once Work Commences:</span> Once materials have
                  been purchased and/or work has begun on your project, all sales are final. No refunds will
                  be issued under any circumstances.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  <span className="font-semibold">Complete Payment Required:</span> Once an initial payment
                  is made, all remaining project payments must be completed in full. Project work will not
                  continue until outstanding balances are settled.
                </p>
              </div>
            )}
          </div>

          {/* Acknowledgment */}
          <CollapsibleCard title="Your Acknowledgment" id="acknowledgment" expanded={expanded} onToggle={toggleSection}>
            <p className="text-lg text-slate-700 leading-relaxed">
              By engaging our services, you acknowledge and fully accept that {config.business.name}
              operates exclusively as a handyman service provider and not as a general contractor. You
              understand the scope of our work, our limitations, and our policies as outlined above.
            </p>
          </CollapsibleCard>
        </div>

        <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-800">
            <span className="font-semibold">Questions?</span> If you have any questions about our services,
            scope of work, or policies, please don't hesitate to contact us before your project begins.
          </p>
        </div>
      </div>
    </section>
  );
}
