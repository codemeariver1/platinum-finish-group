import { Award, Users, Clock, /*Shield*/ } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    description: 'Years of experience delivering exceptional quality on every project.'
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Skilled professionals dedicated to bringing your vision to life.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your time and complete projects as promised.'
  },
  // {
  //   icon: Shield,
  //   title: 'Licensed & Insured',
  //   description: 'Fully licensed and insured for your peace of mind.'
  // }
];

export default function About() {

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Platinum Finish Group?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Platinum Finish Group LLC, we pride ourselves on delivering superior craftsmanship
              and exceptional customer service. Our team of experienced professionals is committed to
              transforming your space with precision, quality, and attention to detail.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're renovating a single room or undertaking a complete home transformation,
              we bring expertise, reliability, and a passion for excellence to every project.
              Your satisfaction is our top priority.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-red-600
                transition-colors duration-300"
              >
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
